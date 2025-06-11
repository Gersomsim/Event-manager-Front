import { BaseEntity } from './common/base.entity'
import { Country } from './country.entity'

/**
 * Interfaz que representa la entidad City en el dominio
 */
export interface City extends BaseEntity {
	name: string
	description: null
	country_id: string
	relationships: CityRelationships
}

export interface CityRelationships {
	country: Country
}
