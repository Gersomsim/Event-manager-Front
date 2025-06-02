import { Injectable } from '@angular/core'
import { BaseMapper } from './base.mapper'

@Injectable({ providedIn: 'root' })
export class CommonMapper extends BaseMapper<any, any> {
	override toPersistence(domain: any) {
		const dto: any = {}

		Object.keys(domain).forEach((key) => {
			const snakeKey = this.toSnakeCase(key)
			if (
				typeof domain[key] === 'object' &&
				domain[key] !== null &&
				!Array.isArray(domain[key])
			) {
				const value = domain[key]
				if (value) {
					dto[snakeKey] = this.toPersistence(value)
				}
			} else {
				// Manejar transformaciones específicas, como convertir IDs a números
				if (key.toLowerCase().includes('id')) {
					const value = domain[key]
					dto[snakeKey] =
						value !== undefined && value !== null ? +value : undefined
				} else {
					dto[snakeKey] = domain[key]
				}
			}
		})

		return dto
	}

	private toSnakeCase(camelStr: string): string {
		return camelStr.replace(
			/([A-Z])/g,
			(matches) => `_${matches[0].toLowerCase()}`,
		)
	}

	/**
	 * Convert a persistence object to a domain object
	 * @param persistence - The persistence object to convert
	 * @returns The converted domain object
	 */
	override toDomain(persistence: any) {
		if (!persistence) return undefined

		const model: any = {}

		Object.keys(persistence).forEach((key) => {
			const camelKey = this.toCamelCase(key)

			if (typeof persistence[key] === 'object' && persistence[key] !== null) {
				if (Array.isArray(persistence[key])) {
					model[camelKey] = persistence[key].map((item: any) =>
						typeof item === 'object' && item !== null
							? this.toDomain(item)
							: item,
					)
				} else {
					model[camelKey] = this.toDomain(persistence[key])
				}
			} else {
				if (key.includes('_id')) {
					const idVal = persistence[key]
					model[camelKey] = idVal ? idVal.toString() : undefined
				} else {
					model[camelKey] = persistence[key]
				}
			}
		})

		return model
	}
	private toCamelCase(snakeStr: string): string {
		return snakeStr.replace(/(_\w)/g, (matches) => matches[1].toUpperCase())
	}
}
