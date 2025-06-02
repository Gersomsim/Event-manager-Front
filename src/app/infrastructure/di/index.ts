import { CATEGORY_REPOSITORY_TOKEN, EVENT_REPOSITORY_TOKEN } from './tokens'
import {
	CategoryRepositoryImpl,
	EventRepositoryImpl,
} from '@infrastructure/repositories'

export const APP_PROVIDERS = [
	{
		provide: CATEGORY_REPOSITORY_TOKEN,
		useClass: CategoryRepositoryImpl,
	},
	{
		provide: EVENT_REPOSITORY_TOKEN,
		useClass: EventRepositoryImpl,
	},
]
