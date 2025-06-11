import {
	CATEGORY_REPOSITORY_TOKEN,
	CITY_REPOSITORY_TOKEN,
	COUNTRY_REPOSITORY_TOKEN,
	EVENT_REPOSITORY_TOKEN,
} from './tokens'
import {
	CategoryRepositoryImpl,
	CityRepositoryImpl,
	CountryRepositoryImpl,
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
	{
		provide: COUNTRY_REPOSITORY_TOKEN,
		useClass: CountryRepositoryImpl,
	},
	{
		provide: CITY_REPOSITORY_TOKEN,
		useClass: CityRepositoryImpl,
	},
]
