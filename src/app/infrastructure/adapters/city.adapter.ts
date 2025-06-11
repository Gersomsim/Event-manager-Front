import { Injectable } from '@angular/core'
import { BaseApiAdapter } from './common/base-api.adapter'
import { City } from '@domain/entities'
import { HttpService } from '@infrastructure/http/http.service'
import { CommonMapper } from '@core/shared/mappers/common.mapper'

/**
 * Adaptador para la entidad City que maneja la comunicación con la API
 */
@Injectable({ providedIn: 'root' })
export class CityAdapter extends BaseApiAdapter<City, string, any> {
	protected override readonly baseUrl: string = 'cities'

	constructor(
		override readonly httpService: HttpService,
		override readonly mapper: CommonMapper,
	) {
		super(httpService, mapper)
	}
}
