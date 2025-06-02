import { BaseStore } from './common/base.store'
import { Event } from '@domain/entities/event.entity'

export class EventStore extends BaseStore<Event> {
	constructor() {
		super('event')
	}
}
