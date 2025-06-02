import { Injectable } from '@angular/core'
import { BaseApiAdapter } from '@infrastructure/adapters/common/base-api.adapter'
import { Category } from '@domain/entities/category.entity'
import { HttpService } from '@infrastructure/http/http.service'
import { CommonMapper } from '@core/shared/mappers/common.mapper'

@Injectable({ providedIn: 'root' })
export class CategoryAdapter extends BaseApiAdapter<Category, string, any> {
	protected override readonly baseUrl: string = 'categories'

	constructor(
		override readonly httpService: HttpService,
		override readonly mapper: CommonMapper,
	) {
		super(httpService, mapper)
	}
}
