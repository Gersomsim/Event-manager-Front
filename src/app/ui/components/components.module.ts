import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from './atoms/forms/ui-button/ui-button.component'
import { UiCarrouselComponent } from './organism/ui-carrousel/ui-carrousel.component'
import { UiEventResumeComponent } from './organism/ui-event-resume/ui-event-resume.component'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [
		UiButtonComponent,
		UiCarrouselComponent,
		UiEventResumeComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [UiButtonComponent, UiCarrouselComponent, UiEventResumeComponent],
})
export class ComponentsModule {}
