import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextMessageComponent } from './display-text-message.component';

describe('DisplayTextMessageComponent', () => {
  let component: DisplayTextMessageComponent;
  let fixture: ComponentFixture<DisplayTextMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTextMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTextMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
