import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable } from 'rxjs'
import { CookieService } from '../libraries/cookie.service'
import { ErrorHandlerService } from '@utils/error-handler'
import { GenerateQueryParams } from '@utils/generate-query-params'
import { environment } from '../../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	private readonly baseUrl = environment.apiUrl
	private readonly apiVersion = environment.versionAPI
	private readonly apiPath = environment.APIPath

	private readonly url = `${this.baseUrl}/${this.apiPath}/${this.apiVersion}`

	constructor(
		private http: HttpClient,
		protected cookieService: CookieService,
		private errorHandler: ErrorHandlerService,
	) {}

	private getHeaders(): HttpHeaders {
		const token = this.cookieService.getCookie('token')
		let label = {}
		if (token) {
			label = {
				Authorization: `Bearer ${token}`,
			}
		}
		return new HttpHeaders({
			Accept: 'application/json',
			...label,
		})
	}

	get<T>(path: string, filters?: any): Observable<T> {
		const params = GenerateQueryParams(filters)
		return this.http
			.get<T>(`${this.url}/${path}`, { headers: this.getHeaders(), params })
			.pipe(catchError(this.errorHandler.handleError))
	}

	post<T>(path: string, body: any): Observable<T> {
		return this.http
			.post<T>(`${this.url}/${path}`, body, { headers: this.getHeaders() })
			.pipe(catchError(this.errorHandler.handleError))
	}

	put<T>(path: string, body: any): Observable<T> {
		return this.http
			.put<T>(`${this.url}/${path}`, body, { headers: this.getHeaders() })
			.pipe(catchError(this.errorHandler.handleError))
	}

	delete<T>(path: string): Observable<T> {
		return this.http
			.delete<T>(`${this.url}/${path}`, { headers: this.getHeaders() })
			.pipe(catchError(this.errorHandler.handleError))
	}

	patch<T>(path: string, body: any): Observable<T> {
		return this.http
			.patch<T>(`${this.url}/${path}`, body, { headers: this.getHeaders() })
			.pipe(catchError(this.errorHandler.handleError))
	}
}
