import { Injectable, Inject } from '@angular/core'
import { BaseGetAllUseCase } from '../common/base-get-all.use-case'
import { Event } from '@domain/entities/event.entity'
import { EventRepository } from '@domain/repositories/event.repository'
import { EVENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/event.token'

@Injectable({ providedIn: 'root' })
export class GetAllEventUseCase extends BaseGetAllUseCase<Event> {
	constructor(
		@Inject(EVENT_REPOSITORY_TOKEN)
		override readonly repository: EventRepository,
	) {
		super(repository)
	}
}
