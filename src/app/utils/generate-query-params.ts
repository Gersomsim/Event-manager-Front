import { HttpParams } from '@angular/common/http'

export const GenerateQueryParams = (queryParams?: any): HttpParams => {
	if (!queryParams) return new HttpParams()
	let params = new HttpParams()
	for (const filtro in queryParams) {
		if (queryParams[filtro] != undefined) {
			params = params.set(filtro, queryParams[filtro])
		}
	}
	return params
}
