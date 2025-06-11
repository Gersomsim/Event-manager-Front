import { Injectable, Inject } from '@angular/core'
import { BaseGetByIdUseCase } from '../common/base-get-by-id.use-case'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CITY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para obtener una ciudad por su ID
 */
@Injectable({ providedIn: 'root' })
export class GetCityByIdUseCase extends BaseGetByIdUseCase<City> {
	constructor(
		@Inject(CITY_REPOSITORY_TOKEN)
		override readonly repository: CityRepository,
	) {
		super(repository)
	}
}
