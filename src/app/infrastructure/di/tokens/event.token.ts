import { InjectionToken } from '@angular/core'
import { EventRepository } from '@domain/repositories/event.repository'

export const EVENT_REPOSITORY_TOKEN = new InjectionToken<EventRepository>(
	'EVENT_REPOSITORY_TOKEN',
)
