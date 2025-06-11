import { Injectable } from '@angular/core'
import { BaseRepositoryImpl } from './common/base-repository-impl'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CityAdapter } from '@infrastructure/adapters'

/**
 * Implementación del repositorio para la entidad City
 */
@Injectable()
export class CityRepositoryImpl
	extends BaseRepositoryImpl<City, string, any>
	implements CityRepository
{
	constructor(override readonly apiAdapter: CityAdapter) {
		super(apiAdapter)
	}
}
