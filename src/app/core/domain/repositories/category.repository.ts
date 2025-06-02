import { CrudRepository } from './common/crud.repository'
import { Category } from '../entities/category.entity'

export interface CategoryRepository extends CrudRepository<Category, string> {}
