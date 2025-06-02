import { Injectable } from '@angular/core'
import { BaseRepositoryImpl } from './common/base-repository-impl'
import { Event } from '@domain/entities/event.entity'
import { EventRepository } from '@domain/repositories/event.repository'
import { EventAdapter } from '@infrastructure/adapters/event.adapter'

@Injectable()
export class EventRepositoryImpl
	extends BaseRepositoryImpl<Event, string, any>
	implements EventRepository
{
	constructor(override readonly apiAdapter: EventAdapter) {
		super(apiAdapter)
	}
}
