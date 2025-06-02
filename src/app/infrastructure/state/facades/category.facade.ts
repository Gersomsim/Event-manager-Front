import { Injectable } from '@angular/core'
import { BaseFacade } from './common/base.facade'
import { Category } from '@domain/entities/category.entity'
import { CategoryStore } from '../stores/category.store'
import {
	CreateCategoryUseCase,
	UpdateCategoryUseCase,
	DeleteCategoryUseCase,
	GetByIdCategoryUseCase,
	GetAllCategoryUseCase,
} from '@application/use-cases'

@Injectable({ providedIn: 'root' })
export class CategoryFacade extends BaseFacade<Category, string> {
	constructor(
		override readonly store: CategoryStore,
		override readonly createUseCase: CreateCategoryUseCase,
		override readonly updateUseCase: UpdateCategoryUseCase,
		override readonly deleteUseCase: DeleteCategoryUseCase,
		override readonly getByIdUseCase: GetByIdCategoryUseCase,
		override readonly getAllUseCase: GetAllCategoryUseCase,
	) {
		super(
			store,
			getAllUseCase,
			getByIdUseCase,
			createUseCase,
			updateUseCase,
			deleteUseCase,
		)
	}
}
