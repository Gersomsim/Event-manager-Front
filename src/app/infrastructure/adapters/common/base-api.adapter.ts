import { lastValueFrom, map } from 'rxjs'
import { BaseMapper } from '../../../core/shared/mappers/base.mapper' // El mapper base que ya tenemos
import { HttpService } from '@infrastructure/http/http.service'
import { ApiResponse } from '@shared/interface/api-response.interface'
import { IndexResponse } from '@shared/interface/index-response.interface'

/**
 * @class BaseApiAdapter
 * @description Clase base para interactuar con una API RESTful para operaciones CRUD.
 * Realiza el mapeo entre el formato de la API (snake_case) y el dominio (camelCase).
 * @template T La entidad de dominio (camelCase).
 * @template ID El tipo del identificador.
 * @template Persistence El tipo del objeto de persistencia (snake_case de la API).
 */
export abstract class BaseApiAdapter<T, ID, Persistence> {
	protected abstract baseUrl: string // Cada adaptador específico deberá definir su URL base

	constructor(
		protected httpService: HttpService,
		protected mapper: BaseMapper<T, Persistence>,
	) {}

	async getAll(filters?: any): Promise<IndexResponse<T[]>> {
		const response = this.httpService
			.get<ApiResponse<Persistence[]>>(this.baseUrl, filters)
			.pipe(
				map((resp) => {
					return {
						pages: resp.pages,
						data: resp.data.map((item) => this.mapper.toDomain(item)),
					}
				}),
			)

		return lastValueFrom(response)
	}

	async getById(id: ID, filters?: any): Promise<T> {
		const response = this.httpService
			.get<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`, filters)
			.pipe(map((data) => this.mapper.toDomain(data.data)))

		return lastValueFrom(response)
	}

	async create(item: T): Promise<T> {
		const payload = this.mapper.toPersistence(item)
		const response = this.httpService
			.post<ApiResponse<Persistence>>(this.baseUrl, payload)
			.pipe(map((data) => this.mapper.toDomain(data.data)))

		return lastValueFrom(response)
	}

	async update(id: ID, item: T): Promise<T> {
		const payload = this.mapper.toPersistence(item)
		const response = this.httpService
			.put<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`, payload)
			.pipe(map((data) => this.mapper.toDomain(data.data)))

		return lastValueFrom(response)
	}

	async delete(id: ID): Promise<T> {
		const response = this.httpService
			.delete<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`)
			.pipe(map((data) => this.mapper.toDomain(data.data)))

		return lastValueFrom(response)
	}
}
