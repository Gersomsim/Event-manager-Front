import { Component, inject, ViewChild } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Event } from '@domain/entities' // Asumo que esta ruta es correcta
import { EventFacade } from '@infrastructure/state/facades' // Asumo que esta ruta es correcta
import { ComponentsModule } from '@ui/components.module'
import { debounceTime, distinctUntilChanged } from 'rxjs'

@Component({
	selector: 'app-event-list-page',
	standalone: true,
	imports: [ComponentsModule, ReactiveFormsModule],
	templateUrl: './event-list-page.component.html',
	styles: ``,
})
export class EventListPageComponent {
	eventFacade = inject(EventFacade)
	router = inject(Router)
	route = inject(ActivatedRoute)

	search = new FormControl('')
	searchValue = ''

	events: Event[] = []

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			this.searchValue = params['search'] ?? ''
			if (this.searchValue) {
				this.search.setValue(this.searchValue)
			}
		})
		this.search.valueChanges
			.pipe(debounceTime(300), distinctUntilChanged())
			.subscribe((value) => {
				this.searchValue = value ?? ''
				this.router.navigate([], {
					queryParams: { search: value },
					queryParamsHandling: 'merge',
				})
				this.getItems()
			})
	}

	ngAfterViewInit() {
		this.eventFacade.items$.subscribe((events) => {
			this.events = events
		})
		this.getItems()
	}

	getItems() {
		this.eventFacade.loadAll({
			search: this.searchValue,
		})
	}
}
