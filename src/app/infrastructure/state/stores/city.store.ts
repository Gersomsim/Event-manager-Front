import { City } from '@domain/entities'
import { BaseStore } from './common/base.store'

/**
 * Store para la entidad City que maneja el estado de la aplicación
 */
export class CityStore extends BaseStore<City> {
	constructor() {
		super('city')
	}
}
