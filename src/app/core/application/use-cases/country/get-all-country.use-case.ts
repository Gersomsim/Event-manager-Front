import { Injectable, Inject } from '@angular/core'
import { BaseGetAllUseCase } from '../common/base-get-all.use-case'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories/country.repository'
import { COUNTRY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para obtener todos los países
 */
@Injectable({ providedIn: 'root' })
export class GetAllCountryUseCase extends BaseGetAllUseCase<Country> {
	constructor(
		@Inject(COUNTRY_REPOSITORY_TOKEN)
		override readonly repository: CountryRepository,
	) {
		super(repository)
	}
}
