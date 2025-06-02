import {
	BaseGetAllUseCase,
	BaseGetByIdUseCase,
	BaseCreateUseCase,
	BaseUpdateUseCase,
	BaseDeleteUseCase,
} from '@application/use-cases'
import { BaseStore } from '@infrastructure/state/stores'
import { Observable } from 'rxjs'

/**
 * @class BaseFacade
 * @description Clase base para los Facades de la UI. Orquesta las interacciones entre los componentes
 * de la UI, los casos de uso y el store de Elf.
 * @template T La entidad de dominio.
 * @template ID El tipo del identificador de la entidad.
 */
export abstract class BaseFacade<
	T extends { id: string | number },
	ID extends string | number,
> {
	// Observables para el estado de la colección
	items$: Observable<T[]>
	item$: Observable<T | null>
	isLoading$: Observable<boolean>

	constructor(
		protected store: BaseStore<T>,
		// Casos de uso genéricos (pueden ser nulos si no todas las operaciones son necesarias)
		protected getAllUseCase?: BaseGetAllUseCase<T>,
		protected getByIdUseCase?: BaseGetByIdUseCase<T>,
		protected createUseCase?: BaseCreateUseCase<T>,
		protected updateUseCase?: BaseUpdateUseCase<T>,
		protected deleteUseCase?: BaseDeleteUseCase<T>,
	) {
		this.items$ = this.store.selectAllEntities()
		this.isLoading$ = this.store.selectLoading()
		this.item$ = this.store.getEntity()
	}

	/**
	 * Carga todas las entidades y las actualiza en el store.
	 * Si no se proporciona un `getAllUseCase`, se emitirá un error.
	 */
	async loadAll(filters: any): Promise<void> {
		if (!this.getAllUseCase) {
			console.error(
				`BaseFacade: 'getAllUseCase' no está definido para ${this.store['store']['name']}.`,
			)
		}
		this.store.setLoading(true)
		const items: T[] = await this.getAllUseCase!.execute(filters)
		this.store.setEntities(items)
		this.store.setLoading(false)
	}

	/**
	 * Carga una entidad por su ID y la añade/actualiza en el store.
	 * Si no se proporciona un `getByIdUseCase`, se emitirá un error.
	 */
	async loadById(id: ID): Promise<void> {
		if (!this.getByIdUseCase) {
			console.error(
				`BaseFacade: 'getByIdUseCase' no está definido para ${this.store['store']['name']}.`,
			)
			return
		}

		this.store.setLoading(true)
		const item: T = await this.getByIdUseCase.execute(id)
		this.store.setEntity(item)
		this.store.setLoading(false)
	}

	/**
	 * Crea una nueva entidad y la añade al store.
	 * Si no se proporciona un `createUseCase`, se emitirá un error.
	 */
	async create(item: T): Promise<T> {
		if (!this.createUseCase) {
			console.error(
				`BaseFacade: 'createUseCase' no está definido para ${this.store['store']['name']}.`,
			)
			return item // Retorna el item original o lanza un error
		}

		this.store.setLoading(true)
		const newItem: T = await this.createUseCase.execute(item)
		this.store.addEntity(newItem)
		this.store.setLoading(false)
		return newItem
	}

	/**
	 * Actualiza una entidad existente en el store.
	 * Si no se proporciona un `updateUseCase`, se emitirá un error.
	 */
	async update(id: ID, item: T): Promise<T> {
		if (!this.updateUseCase) {
			console.error(
				`BaseFacade: 'updateUseCase' no está definido para ${this.store['store']['name']}.`,
			)
			return item
		}

		this.store.setLoading(true)
		const updatedItem: T = await this.updateUseCase.execute(id, item)
		this.store.updateEntity(updatedItem)
		this.store.setLoading(false)
		return updatedItem
	}

	/**
	 * Elimina una entidad del store por su ID.
	 * Si no se proporciona un `deleteUseCase`, se emitirá un error.
	 */
	async delete(id: ID): Promise<void> {
		if (!this.deleteUseCase) {
			console.error(
				`BaseFacade: 'deleteUseCase' no está definido para ${this.store['store']['name']}.`,
			)
			return
		}

		this.store.setLoading(true)
		await this.deleteUseCase.execute(id)
		this.store.removeEntity(id)
		this.store.setLoading(false)
	}
}
