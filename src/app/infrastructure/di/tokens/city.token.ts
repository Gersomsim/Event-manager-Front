import { InjectionToken } from '@angular/core'
import { CityRepository } from '@domain/repositories/city.repository'

/**
 * Token de inyección para el repositorio de City
 */
export const CITY_REPOSITORY_TOKEN = new InjectionToken<CityRepository>(
	'CITY_REPOSITORY_TOKEN',
)
