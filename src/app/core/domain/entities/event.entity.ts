import { Category } from './category.entity'
import { BaseEntity } from './common/base.entity'
import { Country } from './country.entity'

export interface Event extends BaseEntity {
	name: string
	slug: string
	description: string
	eventStartDate: Date
	eventEndDate: Date
	status: string
	availablePlaces: number
	categoryId: string
	locationId: string
	relationships: EventRelationships
}

export interface EventRelationships {
	category: Category
	location: Location
}

export interface Location {
	name: string
	description: string
	address: string
	city_id: string
	relationships: LocationRelationships
}

export interface LocationRelationships {
	city: City
}

export interface City {
	name: string
	description: null
	country_id: string
	relationships: CityRelationships
}

export interface CityRelationships {
	country: Country
}
