import { Injectable } from '@angular/core'
import { BaseFacade } from './common/base.facade'
import { City } from '@domain/entities'
import { CityStore } from '../stores/city.store'
import { CreateCityUseCase } from '@core/application/use-cases/city'
import { UpdateCityUseCase } from '@core/application/use-cases/city'
import { DeleteCityUseCase } from '@core/application/use-cases/city'
import { GetCityByIdUseCase } from '@core/application/use-cases/city'
import { GetAllCityUseCase } from '@core/application/use-cases/city'

/**
 * Facade para la entidad City que proporciona una interfaz unificada para interactuar con el estado
 */
@Injectable({ providedIn: 'root' })
export class CityFacade extends BaseFacade<City, string> {
	constructor(
		override readonly store: CityStore,
		override readonly createUseCase: CreateCityUseCase,
		override readonly updateUseCase: UpdateCityUseCase,
		override readonly deleteUseCase: DeleteCityUseCase,
		override readonly getByIdUseCase: GetCityByIdUseCase,
		override readonly getAllUseCase: GetAllCityUseCase,
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
