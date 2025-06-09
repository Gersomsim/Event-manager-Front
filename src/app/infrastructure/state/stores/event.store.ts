import { Injectable } from '@angular/core'
import { BaseStore } from './common/base.store'
import { Event } from '@domain/entities/event.entity'

@Injectable({
	providedIn: 'root',
})
export class EventStore extends BaseStore<Event> {
	constructor() {
		super('event')
	}
}
