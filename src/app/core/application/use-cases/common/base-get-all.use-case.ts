import { CrudRepository } from '@domain/repositories/common/crud.repository'
import { IndexResponse } from '@shared/interface/index-response.interface'

export abstract class BaseGetAllUseCase<T> {
	constructor(protected readonly repository: CrudRepository<T, string>) {}

	execute(filters?: any): Promise<IndexResponse<T[]>> {
		return this.repository.findAll(filters)
	}
}
