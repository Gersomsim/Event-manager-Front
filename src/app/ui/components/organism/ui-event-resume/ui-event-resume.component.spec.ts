import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEventResumeComponent } from './ui-event-resume.component';

describe('UiEventResumeComponent', () => {
  let component: UiEventResumeComponent;
  let fixture: ComponentFixture<UiEventResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEventResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEventResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
