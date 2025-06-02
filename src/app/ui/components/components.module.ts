import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from './atoms/forms/ui-button/ui-button.component'
import { UiCarrouselComponent } from './organism/ui-carrousel/ui-carrousel.component'

@NgModule({
	declarations: [UiButtonComponent, UiCarrouselComponent],
	imports: [CommonModule],
	exports: [UiButtonComponent, UiCarrouselComponent],
})
export class ComponentsModule {}
