import { Injectable } from '@angular/core'
import { BaseFacade } from './common/base.facade'
import { Event } from '@domain/entities/event.entity'
import { EventStore } from '../stores/event.store'
import {
	CreateEventUseCase,
	UpdateEventUseCase,
	DeleteEventUseCase,
	GetByIdEventUseCase,
	GetAllEventUseCase,
} from '@application/use-cases'

@Injectable({ providedIn: 'root' })
export class EventFacade extends BaseFacade<Event, string> {
	constructor(
		override readonly store: EventStore,
		override readonly createUseCase: CreateEventUseCase,
		override readonly updateUseCase: UpdateEventUseCase,
		override readonly deleteUseCase: DeleteEventUseCase,
		override readonly getByIdUseCase: GetByIdEventUseCase,
		override readonly getAllUseCase: GetAllEventUseCase,
	) {
		super(
			store,
			getAllUseCase,
			getByIdUseCase,
			createUseCase,
			updateUseCase,
			deleteUseCase,
		)
	}
}
