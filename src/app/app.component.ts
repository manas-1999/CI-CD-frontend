import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayTextMessageComponent } from './display-text-message/display-text-message.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayTextMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
}
