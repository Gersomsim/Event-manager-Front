import { Injectable } from '@angular/core'
import { BaseRepositoryImpl } from './common/base-repository-impl'
import { Category } from '@domain/entities/category.entity'
import { CategoryRepository } from '@domain/repositories/category.repository'
import { CategoryAdapter } from '@infrastructure/adapters/category.adapter'

@Injectable()
export class CategoryRepositoryImpl
	extends BaseRepositoryImpl<Category, string, any>
	implements CategoryRepository
{
	constructor(override readonly apiAdapter: CategoryAdapter) {
		super(apiAdapter)
	}
}
