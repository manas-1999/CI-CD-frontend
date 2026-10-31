import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TimeRange = '7 days' | '30 days' | '90 days';

interface ChartPoint {
  label: string;
  value: number;
  highlight?: boolean;
}

interface PriorityTask {
  title: string;
  project: string;
  time: string;
  done: boolean;
}

interface TeamActivity {
  name: string;
  action: string;
  target: string;
  when: string;
  initials: string;
  avatarClass: string;
}

@Component({
  selector: 'app-display-text-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './display-text-message.component.html',
  styleUrl: './display-text-message.component.css'
})
export class DisplayTextMessageComponent {
  readonly todayLabel = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).format(new Date());

  selectedRange: TimeRange = '7 days';
  searchQuery = '';
  showAllTasks = false;
  showQuickNote = false;

  readonly tasks: PriorityTask[] = [
    { title: 'Review homepage concepts', project: 'Website redesign', time: '10:00 AM', done: true },
    { title: 'Share sprint update', project: 'Product launch', time: '11:30 AM', done: false },
    { title: 'Finalize campaign brief', project: 'Q4 content strategy', time: '2:00 PM', done: false },
    { title: 'Send feedback to Jamie', project: 'Website redesign', time: '3:30 PM', done: true },
    { title: 'Plan next week’s priorities', project: 'Studio North', time: '4:30 PM', done: false }
  ];

  readonly activities: TeamActivity[] = [
    { name: 'Jamie Davis', action: 'completed a task in', target: 'Website redesign', when: '12 min ago', initials: 'JD', avatarClass: 'avatar-lilac' },
    { name: 'Morgan Kim', action: 'shared a new update in', target: 'Product launch', when: '38 min ago', initials: 'MK', avatarClass: 'avatar-peach' },
    { name: 'Sam Lee', action: 'joined the project', target: 'Q4 content strategy', when: '1 hour ago', initials: 'SL', avatarClass: 'avatar-mint' }
  ];

  private readonly chartData: Record<TimeRange, ChartPoint[]> = {
    '7 days': [
      { label: 'Mon', value: 3.2 },
      { label: 'Tue', value: 5.1 },
      { label: 'Wed', value: 7.3, highlight: true },
      { label: 'Thu', value: 4.6 },
      { label: 'Fri', value: 6.2 },
      { label: 'Sat', value: 2.4 },
      { label: 'Sun', value: 3.8 }
    ],
    '30 days': [
      { label: 'Oct 1', value: 4.1 },
      { label: 'Oct 5', value: 5.8 },
      { label: 'Oct 9', value: 3.6 },
      { label: 'Oct 13', value: 6.5, highlight: true },
      { label: 'Oct 17', value: 4.9 },
      { label: 'Oct 21', value: 7.1 },
      { label: 'Oct 25', value: 5.6 }
    ],
    '90 days': [
      { label: 'Aug 1', value: 3.7 },
      { label: 'Aug 15', value: 5.4 },
      { label: 'Sep 1', value: 4.6 },
      { label: 'Sep 15', value: 6.8, highlight: true },
      { label: 'Oct 1', value: 5.1 },
      { label: 'Oct 15', value: 7.4 },
      { label: 'Oct 30', value: 6.3 }
    ]
  };

  get chartPoints(): ChartPoint[] {
    return this.chartData[this.selectedRange];
  }

  get rangeTotal(): string {
    const totals: Record<TimeRange, string> = {
      '7 days': '28.5',
      '30 days': '116.2',
      '90 days': '341.8'
    };
    return totals[this.selectedRange];
  }

  get completedTaskCount(): number {
    return 9 + this.tasks.filter((task) => task.done).length;
  }

  get visibleTasks(): PriorityTask[] {
    return this.showAllTasks ? this.tasks : this.tasks.slice(0, 4);
  }

  get filteredActivities(): TeamActivity[] {
    const query = this.searchQuery.trim().toLocaleLowerCase();
    if (!query) {
      return this.activities;
    }

    return this.activities.filter((activity) =>
      `${activity.name} ${activity.action} ${activity.target}`.toLocaleLowerCase().includes(query)
    );
  }

  selectRange(range: TimeRange): void {
    this.selectedRange = range;
  }

  toggleTask(task: PriorityTask): void {
    task.done = !task.done;
  }
}
