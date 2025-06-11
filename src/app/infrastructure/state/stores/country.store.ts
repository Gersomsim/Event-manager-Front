import { Country } from '@domain/entities/country.entity'
import { BaseStore } from './common/base.store'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class CountryStore extends BaseStore<Country> {
	constructor() {
		super('country')
	}
}
