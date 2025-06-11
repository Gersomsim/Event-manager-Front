import { Injectable, Inject } from '@angular/core'
import { BaseCreateUseCase } from '../common/base-create.use-case'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CITY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para crear una nueva ciudad
 */
@Injectable({ providedIn: 'root' })
export class CreateCityUseCase extends BaseCreateUseCase<City> {
	constructor(
		@Inject(CITY_REPOSITORY_TOKEN)
		override readonly repository: CityRepository,
	) {
		super(repository)
	}
}
