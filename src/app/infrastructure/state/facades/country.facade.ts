import { Injectable } from '@angular/core'
import { Country } from '@domain/entities/country.entity'
import { CountryStore } from '@infrastructure/state/stores/country.store'
import {
	CreateCountryUseCase,
	UpdateCountryUseCase,
	DeleteCountryUseCase,
	GetCountryByIdUseCase,
	GetAllCountryUseCase,
} from '@application/use-cases'
import { BaseFacade } from './common/base.facade'

/**
 * Facade para la entidad Country
 */
@Injectable({ providedIn: 'root' })
export class CountryFacade extends BaseFacade<Country, string> {
	constructor(
		override readonly store: CountryStore,
		override readonly createUseCase: CreateCountryUseCase,
		override readonly updateUseCase: UpdateCountryUseCase,
		override readonly deleteUseCase: DeleteCountryUseCase,
		override readonly getByIdUseCase: GetCountryByIdUseCase,
		override readonly getAllUseCase: GetAllCountryUseCase,
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
