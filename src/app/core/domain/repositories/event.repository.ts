import { CrudRepository } from './common/crud.repository'
import { Event } from '../entities/event.entity'

export interface EventRepository extends CrudRepository<Event, string> {}
