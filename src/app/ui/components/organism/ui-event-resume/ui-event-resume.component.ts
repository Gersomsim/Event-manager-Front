import { Component, Input } from '@angular/core'
import { Event } from '@domain/entities'

@Component({
	selector: 'app-ui-event-resume',
	standalone: false,
	templateUrl: './ui-event-resume.component.html',
	styles: ``,
})
export class UiEventResumeComponent {
	@Input() event!: Event
}
