import { Injectable, Inject } from '@angular/core'
import { BaseUpdateUseCase } from '../common/base-update.use-case'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CITY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para actualizar una ciudad existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateCityUseCase extends BaseUpdateUseCase<City> {
	constructor(
		@Inject(CITY_REPOSITORY_TOKEN)
		override readonly repository: CityRepository,
	) {
		super(repository)
	}
}
