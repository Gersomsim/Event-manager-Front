import { Component, Input } from '@angular/core'
import {
	Carousel,
	CarouselInterface,
	CarouselItem,
	CarouselOptions,
	initCarousels,
	InstanceOptions,
} from 'flowbite'

interface CItem extends CarouselItem {
	image: string
	content?: {
		title: string
		description: string
	}
}

@Component({
	selector: 'app-ui-carrousel',
	standalone: false,
	templateUrl: './ui-carrousel.component.html',
	styles: ``,
})
export class UiCarrouselComponent {
	carousel!: CarouselInterface
	instanceOptions: InstanceOptions = {
		id: 'carousel-example',
		override: true,
	}

	@Input() id: string = 'carousel-example'
	@Input() items: CItem[] = []
	@Input() interval: number = 3000

	ngAfterViewInit() {
		this.initCarousel()
	}
	initCarousel() {
		const carouselElement: HTMLElement = document.getElementById(this.id)!
		const options: CarouselOptions = {
			defaultPosition: 1,
			interval: this.interval,
			indicators: {
				activeClasses: 'bg-white dark:bg-gray-800',
				inactiveClasses:
					'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
				items: this.items.map((item) => ({
					position: item.position,
					el: document.getElementById(`${this.id}-indicator-${item.position}`)!,
				})),
			},
			onNext: () => {},
			onPrev: () => {},
			onChange: () => {},
		}
		const items: CarouselItem[] = this.items.map((item) => ({
			position: item.position,
			el: document.getElementById(`${this.id}-item-${item.position}`)!,
		}))

		this.carousel = new Carousel(
			carouselElement,
			items,
			options,
			this.instanceOptions,
		)
		this.carousel.cycle()
	}
}
