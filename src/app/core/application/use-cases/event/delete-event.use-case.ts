import { Injectable, Inject } from '@angular/core'
import { BaseDeleteUseCase } from '../common/base-delete.use-case'
import { Event } from '@domain/entities/event.entity'
import { EventRepository } from '@domain/repositories/event.repository'
import { EVENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/event.token'

@Injectable({ providedIn: 'root' })
export class DeleteEventUseCase extends BaseDeleteUseCase<Event> {
	constructor(
		@Inject(EVENT_REPOSITORY_TOKEN)
		override readonly repository: EventRepository,
	) {
		super(repository)
	}
}
