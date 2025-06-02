import { Injectable } from '@angular/core'
import { BaseApiAdapter } from '@infrastructure/adapters/common/base-api.adapter'
import { Event } from '@domain/entities/event.entity'
import { HttpService } from '@infrastructure/http/http.service'
import { CommonMapper } from '@core/shared/mappers/common.mapper'

@Injectable({ providedIn: 'root' })
export class EventAdapter extends BaseApiAdapter<Event, string, any> {
	protected override readonly baseUrl: string = 'events'

	constructor(
		override readonly httpService: HttpService,
		override readonly mapper: CommonMapper,
	) {
		super(httpService, mapper)
	}
}
