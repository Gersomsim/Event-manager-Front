import { Injectable, Inject } from '@angular/core'
import { BaseDeleteUseCase } from '../common/base-delete.use-case'
import { Category } from '@domain/entities/category.entity'
import { CategoryRepository } from '@domain/repositories/category.repository'
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token'

@Injectable({ providedIn: 'root' })
export class DeleteCategoryUseCase extends BaseDeleteUseCase<Category> {
	constructor(
		@Inject(CATEGORY_REPOSITORY_TOKEN)
		override readonly repository: CategoryRepository,
	) {
		super(repository)
	}
}
