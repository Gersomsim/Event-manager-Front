import { Injectable } from '@angular/core'

import { Country } from '@domain/entities/country.entity'
import { HttpService } from '@infrastructure/http/http.service'
import { CommonMapper } from '@core/shared/mappers/common.mapper'
import { BaseApiAdapter } from './common/base-api.adapter'

/**
 * Adaptador para la entidad Country
 */
@Injectable({ providedIn: 'root' })
export class CountryAdapter extends BaseApiAdapter<Country, string, any> {
	protected override readonly baseUrl: string = 'countries'

	constructor(
		override readonly httpService: HttpService,
		override readonly mapper: CommonMapper,
	) {
		super(httpService, mapper)
	}
}
