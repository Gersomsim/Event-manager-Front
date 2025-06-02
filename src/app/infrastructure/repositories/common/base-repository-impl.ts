import { CrudRepository } from '@domain/repositories/common/crud.repository'
import { BaseApiAdapter } from '@infrastructure/adapters/common/base-api.adapter'

export abstract class BaseRepositoryImpl<T, ID, M>
	implements CrudRepository<T, ID>
{
	constructor(protected readonly apiAdapter: BaseApiAdapter<T, ID, M>) {}

	findAll(): Promise<T[]> {
		return this.apiAdapter.getAll()
	}

	findById(id: ID): Promise<T> {
		return this.apiAdapter.getById(id)
	}

	create(entity: T): Promise<T> {
		return this.apiAdapter.create(entity)
	}

	update(id: ID, entity: T): Promise<T> {
		return this.apiAdapter.update(id, entity)
	}

	delete(id: ID): Promise<T> {
		return this.apiAdapter.delete(id)
	}
}
