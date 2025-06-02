import { Store, createStore, withProps } from '@ngneat/elf'
import {
	setEntities,
	updateEntities,
	deleteEntities,
	addEntities,
	getAllEntities,
	selectEntity,
	withEntities,
	EntitiesState,
	EntitiesRef,
	selectAllEntities,
} from '@ngneat/elf-entities'
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface BaseStateType<T> {
	loading: boolean
	entity: T | null
}

/**
 * @class BaseStore
 * @description Clase base para la gestión de estado de entidades usando Elf.
 * @template T La entidad de dominio.
 * @template ID El tipo del identificador de la entidad.
 */
export abstract class BaseStore<T extends { id: string | number }> {
	protected store: Store<any>

	constructor(name: string, enablePersist: boolean = false) {
		this.store = createStore(
			{ name },
			withProps<BaseStateType<T>>({
				loading: false,
				entity: null,
			}),
			withEntities<T>(),
		)
		if (enablePersist) {
			persistState(this.store, {
				key: name,
				storage: localStorageStrategy,
			})
		}
	}

	// Métodos genéricos para interactuar con el store
	setLoading(isLoading: boolean): void {
		this.store.update((state) => ({
			...state,
			loading: isLoading,
		}))
	}

	selectLoading(): Observable<boolean> {
		return this.store.pipe(map((state) => state.loading))
	}

	// Métodos para la gestión de colecciones de entidades
	setEntities(entities: T[]): void {
		this.store.update(setEntities(entities))
	}

	addEntity(entity: T): void {
		this.store.update(addEntities(entity))
	}

	updateEntity(entity: T): void {
		this.store.update(updateEntities(entity.id, entity))
	}

	removeEntity(id: string | number): void {
		this.store.update(deleteEntities(id))
	}

	selectAllEntities(): Observable<T[]> {
		return this.store.pipe(selectAllEntities())
	}

	selectEntityById(id: string | number): Observable<T | undefined> {
		return this.store.pipe(selectEntity(id))
	}
	setEntity(entity: T): void {
		this.store.update((state) => ({
			...state,
			entity,
		}))
	}
	getEntity(): Observable<T | null> {
		return this.store.pipe(map((state) => state.entity))
	}
}
