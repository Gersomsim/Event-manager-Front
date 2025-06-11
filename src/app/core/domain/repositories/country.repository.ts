import { Country } from '@domain/entities'
import { CrudRepository } from './common/crud.repository'

/**
 * Interfaz que define las operaciones del repositorio de Country
 */
export interface CountryRepository extends CrudRepository<Country, string> {}
