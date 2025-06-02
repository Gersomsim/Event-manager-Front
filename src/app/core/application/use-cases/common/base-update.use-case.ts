import { CrudRepository } from '@domain/repositories/common/crud.repository'

export abstract class BaseUpdateUseCase<T> {
	constructor(protected readonly repository: CrudRepository<T, string>) {}

	execute(id: string, entity: Partial<T>): Promise<T> {
		return this.repository.update(id, entity)
	}
}
