import { BaseStore } from './common/base.store'
import { Category } from '@domain/entities/category.entity'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class CategoryStore extends BaseStore<Category> {
	constructor() {
		super('category')
	}
}
