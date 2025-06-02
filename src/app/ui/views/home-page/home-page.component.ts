import { Component } from '@angular/core'
import { ComponentsModule } from '../../components/components.module'

@Component({
	selector: 'app-home-page',
	imports: [ComponentsModule],
	templateUrl: './home-page.component.html',
	styles: ``,
})
export class HomePageComponent {
	PrincipalSlider = [
		{
			image:
				'https://cdn.pixabay.com/photo/2017/05/19/06/22/desk-2325627_1280.jpg',
			position: 0,
			el: document.getElementById('item-0')!,
			content: {
				title: 'Organiza eventos sin complicaciones',
				description:
					'Desde talleres pequeños hasta conciertos masivos, nuestra plataforma te da las herramientas que necesitas para planificar, promocionar y gestionar tu evento en un solo lugar.',
			},
		},
		{
			image:
				'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_1280.jpg',
			position: 1,
			el: document.getElementById('item-1')!,
			content: {
				title: 'Experiencias que dejan huella',
				description:
					'Ya sea que organices o participes, encuentra todo lo que necesitas en una sola plataforma. Explora, crea y forma parte de algo único.',
			},
		},
	]
}
