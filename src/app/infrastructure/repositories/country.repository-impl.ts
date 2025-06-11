import { Injectable } from '@angular/core'
import { BaseRepositoryImpl } from './common/base-repository-impl'
import { Country } from '@domain/entities'
import { CountryRepository } from '@domain/repositories'
import { CountryAdapter } from '@infrastructure/adapters'

/**
 * Implementación del repositorio de Country
 */
@Injectable()
export class CountryRepositoryImpl
	extends BaseRepositoryImpl<Country, string, any>
	implements CountryRepository
{
	constructor(override readonly apiAdapter: CountryAdapter) {
		super(apiAdapter)
	}
}
