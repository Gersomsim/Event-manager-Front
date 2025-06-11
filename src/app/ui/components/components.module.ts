import { forwardRef, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from './atoms/forms/ui-button/ui-button.component'
import { UiCarrouselComponent } from './organism/ui-carrousel/ui-carrousel.component'
import { UiEventResumeComponent } from './organism/ui-event-resume/ui-event-resume.component'
import { RouterModule } from '@angular/router'
import { UiSelectComponent } from './molecules/forms/ui-select/ui-select.component'
import { UiInputComponent } from './atoms/forms/ui-input/ui-input.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		UiButtonComponent,
		UiCarrouselComponent,
		UiEventResumeComponent,
		UiSelectComponent,
		UiInputComponent,
	],
	imports: [CommonModule, RouterModule, FormsModule],
	exports: [
		UiButtonComponent,
		UiCarrouselComponent,
		UiEventResumeComponent,
		UiSelectComponent,
		UiInputComponent,
	],
	providers: [],
})
export class ComponentsModule {}
