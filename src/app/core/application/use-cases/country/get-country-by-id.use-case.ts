import { Injectable, Inject } from '@angular/core'
import { BaseGetByIdUseCase } from '../common/base-get-by-id.use-case'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories/country.repository'
import { COUNTRY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para obtener un país por su ID
 */
@Injectable({ providedIn: 'root' })
export class GetCountryByIdUseCase extends BaseGetByIdUseCase<Country> {
	constructor(
		@Inject(COUNTRY_REPOSITORY_TOKEN)
		override readonly repository: CountryRepository,
	) {
		super(repository)
	}
}
