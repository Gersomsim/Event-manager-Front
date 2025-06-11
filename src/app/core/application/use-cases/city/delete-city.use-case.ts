import { Injectable, Inject } from '@angular/core'
import { BaseDeleteUseCase } from '../common/base-delete.use-case'
import { City } from '@domain/entities'
import { CityRepository } from '@domain/repositories'
import { CITY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para eliminar una ciudad
 */
@Injectable({ providedIn: 'root' })
export class DeleteCityUseCase extends BaseDeleteUseCase<City> {
	constructor(
		@Inject(CITY_REPOSITORY_TOKEN)
		override readonly repository: CityRepository,
	) {
		super(repository)
	}
}
