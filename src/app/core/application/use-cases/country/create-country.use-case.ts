import { Injectable, Inject } from '@angular/core'
import { BaseCreateUseCase } from '../common/base-create.use-case'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories/country.repository'
import { COUNTRY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para crear un nuevo país
 */
@Injectable({ providedIn: 'root' })
export class CreateCountryUseCase extends BaseCreateUseCase<Country> {
	constructor(
		@Inject(COUNTRY_REPOSITORY_TOKEN)
		override readonly repository: CountryRepository,
	) {
		super(repository)
	}
}
