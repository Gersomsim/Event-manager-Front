import { Category } from './category.entity'
import { BaseEntity } from './common/base.entity'

export interface Event extends BaseEntity {
	name: string
	slug: string
	description: string
	event_start_date: Date
	event_end_date: Date
	status: string
	available_places: number
	category_id: string
	location_id: string
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

export interface Country {
	id: string
	name: string
}
