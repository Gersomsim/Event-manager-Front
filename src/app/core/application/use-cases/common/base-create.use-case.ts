import { CrudRepository } from '@domain/repositories/common/crud.repository'

export abstract class BaseCreateUseCase<T> {
	constructor(protected readonly repository: CrudRepository<T, string>) {}

	execute(entity: Partial<T>): Promise<T> {
		return this.repository.create(entity)
	}
}
