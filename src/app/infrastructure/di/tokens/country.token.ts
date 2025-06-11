import { InjectionToken } from '@angular/core'
import { CountryRepository } from '@domain/repositories/country.repository'

/**
 * Token de inyección para el repositorio de Country
 */
export const COUNTRY_REPOSITORY_TOKEN = new InjectionToken<CountryRepository>(
	'COUNTRY_REPOSITORY_TOKEN',
)
