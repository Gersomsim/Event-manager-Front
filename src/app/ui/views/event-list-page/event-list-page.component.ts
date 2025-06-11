import { Component, inject, ViewChild } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Category, Event } from '@domain/entities' // Asumo que esta ruta es correcta
import {
	CategoryFacade,
	CityFacade,
	CountryFacade,
	EventFacade,
} from '@infrastructure/state/facades' // Asumo que esta ruta es correcta
import { Pages } from '@shared/interface/pages.interface'
import { ComponentsModule } from '@ui/components.module'
import { OptionType } from '@ui/types/forms/option.type'
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
	categoryFacade = inject(CategoryFacade)
	countryFacade = inject(CountryFacade)
	cityFacade = inject(CityFacade)

	router = inject(Router)
	route = inject(ActivatedRoute)

	search = new FormControl('')
	category = new FormControl('')
	country = new FormControl('')
	city = new FormControl('')

	searchValue = ''
	categoryValue = ''
	countryValue = ''
	cityValue = ''
	page = 1
	limit = 10

	events: Event[] = []
	categories: OptionType[] = []
	countries: OptionType[] = []
	cities: OptionType[] = []
	pagination?: Pages

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			this.searchValue = params['search'] ?? ''
			this.categoryValue = params['category'] ?? ''
			this.countryValue = params['country'] ?? ''
			this.cityValue = params['city'] ?? ''
			this.page = params['page'] ?? 1
			this.limit = params['limit'] ?? 10
			if (this.searchValue) {
				this.search.setValue(this.searchValue)
			}
			if (this.categoryValue) {
				this.category.setValue(this.categoryValue)
			}
			if (this.countryValue) {
				this.country.setValue(this.countryValue)
			}
			if (this.cityValue) {
				this.city.setValue(this.cityValue)
			}
			this.loadData()
		})
		this.search.valueChanges
			.pipe(debounceTime(300), distinctUntilChanged())
			.subscribe((value) => {
				this.searchValue = value ?? ''
				this.router.navigate([], {
					queryParams: { search: value },
					queryParamsHandling: 'merge',
				})
			})
		this.category.valueChanges.subscribe((value) => {
			this.router.navigate([], {
				queryParams: { category: value },
				queryParamsHandling: 'merge',
			})
		})
		this.country.valueChanges.subscribe((value) => {
			this.router.navigate([], {
				queryParams: { country: value },
				queryParamsHandling: 'merge',
			})
		})
		this.city.valueChanges.subscribe((value) => {
			this.router.navigate([], {
				queryParams: { city: value },
				queryParamsHandling: 'merge',
			})
		})
	}

	ngAfterViewInit() {
		this.eventFacade.items$.subscribe((events) => {
			this.events = events
		})
		this.eventFacade.pages$.subscribe((pages) => {
			this.pagination = pages
			console.log(pages)
		})
		this.categoryFacade.items$.subscribe((categories) => {
			this.categories = categories.map((category) => ({
				value: category.id,
				label: category.name,
			}))
		})
		this.countryFacade.items$.subscribe((countries) => {
			this.countries = countries.map((country) => ({
				value: country.id,
				label: country.name,
			}))
		})
		this.cityFacade.items$.subscribe((cities) => {
			this.cities = cities.map((city) => ({
				value: city.id,
				label: city.name,
			}))
		})
	}

	loadData() {
		this.eventFacade.loadAll({
			search: this.searchValue,
			category_id: this.categoryValue,
			country_id: this.countryValue,
			city_id: this.cityValue,
			paginated: true,
			page: this.page,
			limit: this.limit,
		})
		this.categoryFacade.loadAll({})
		this.countryFacade.loadAll({})
		this.cityFacade.loadAll({ country_id: this.countryValue })
	}

	clearFilters() {
		this.search.setValue('')
		this.category.setValue('')
		this.country.setValue('')
		this.city.setValue('')
		this.router.navigate([], { queryParams: {} })
	}
	getCategoryName(categoryId: string) {
		return this.categories.find((c) => c.value === categoryId)?.label ?? ''
	}
	getCountryName(countryId: string) {
		return this.countries.find((c) => c.value === countryId)?.label ?? ''
	}
	getCityName(cityId: string) {
		return this.cities.find((c) => c.value === cityId)?.label ?? ''
	}
}
