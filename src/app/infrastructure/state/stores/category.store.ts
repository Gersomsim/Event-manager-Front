import { BaseStore } from './common/base.store'
import { Category } from '@domain/entities/category.entity'

export class CategoryStore extends BaseStore<Category> {
	constructor() {
		super('category')
	}
}
