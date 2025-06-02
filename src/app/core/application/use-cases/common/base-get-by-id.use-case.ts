import { CrudRepository } from '@domain/repositories/common/crud.repository'

export abstract class BaseGetByIdUseCase<T> {
	constructor(protected readonly repository: CrudRepository<T, string>) {}

	execute(id: string): Promise<T> {
		return this.repository.findById(id)
	}
}
