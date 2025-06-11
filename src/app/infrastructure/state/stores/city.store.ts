import { City } from '@domain/entities'
import { BaseStore } from './common/base.store'
import { Injectable } from '@angular/core'

/**
 * Store para la entidad City que maneja el estado de la aplicación
 */
@Injectable({ providedIn: 'root' })
export class CityStore extends BaseStore<City> {
	constructor() {
		super('city')
	}
}
