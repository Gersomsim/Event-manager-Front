import { Injectable, Inject } from '@angular/core'
import { BaseGetByIdUseCase } from '../common/base-get-by-id.use-case'
import { Category } from '@domain/entities/category.entity'
import { CategoryRepository } from '@domain/repositories/category.repository'
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token'

@Injectable({ providedIn: 'root' })
export class GetByIdCategoryUseCase extends BaseGetByIdUseCase<Category> {
	constructor(
		@Inject(CATEGORY_REPOSITORY_TOKEN)
		override readonly repository: CategoryRepository,
	) {
		super(repository)
	}
}
