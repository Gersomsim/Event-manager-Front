import { Injectable, Inject } from '@angular/core'
import { BaseDeleteUseCase } from '../common/base-delete.use-case'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories/country.repository'
import { COUNTRY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens'

/**
 * Caso de uso para eliminar un país
 */
@Injectable({ providedIn: 'root' })
export class DeleteCountryUseCase extends BaseDeleteUseCase<Country> {
	constructor(
		@Inject(COUNTRY_REPOSITORY_TOKEN)
		override readonly repository: CountryRepository,
	) {
		super(repository)
	}
}
