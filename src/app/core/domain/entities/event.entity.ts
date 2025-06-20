import { Category } from './category.entity'
import { City } from './city.entity'
import { BaseEntity } from './common/base.entity'

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
