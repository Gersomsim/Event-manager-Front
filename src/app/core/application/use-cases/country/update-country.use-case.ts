import { Injectable, Inject } from '@angular/core'
import { BaseUpdateUseCase } from '../common/base-update.use-case'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories/country.repository'
import { COUNTRY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para actualizar un país existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateCountryUseCase extends BaseUpdateUseCase<Country> {
	constructor(
		@Inject(COUNTRY_REPOSITORY_TOKEN)
		override readonly repository: CountryRepository,
	) {
		super(repository)
	}
}
