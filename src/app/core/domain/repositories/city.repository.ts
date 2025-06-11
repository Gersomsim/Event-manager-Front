import { CrudRepository } from './common/crud.repository'
import { City } from '../entities'

/**
 * Interfaz que define las operaciones del repositorio para la entidad City
 */
export interface CityRepository extends CrudRepository<City, string> {}
