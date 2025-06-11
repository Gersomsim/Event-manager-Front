import { Injectable, Inject } from '@angular/core'
import { BaseGetAllUseCase } from '../common/base-get-all.use-case'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CITY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para obtener todas las ciudades
 */
@Injectable({ providedIn: 'root' })
export class GetAllCityUseCase extends BaseGetAllUseCase<City> {
	constructor(
		@Inject(CITY_REPOSITORY_TOKEN)
		override readonly repository: CityRepository,
	) {
		super(repository)
	}
}
