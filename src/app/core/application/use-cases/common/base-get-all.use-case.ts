import { CrudRepository } from '@domain/repositories/common/crud.repository'

export abstract class BaseGetAllUseCase<T> {
	constructor(protected readonly repository: CrudRepository<T, string>) {}

	execute(filters?: any): Promise<T[]> {
		return this.repository.findAll(filters)
	}
}
