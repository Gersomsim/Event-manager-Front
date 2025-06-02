import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ErrorHandlerService {
	handleError(error: any) {
		let mensaje = 'Error desconocido'
		if (error.status === 0) {
			console.error('Error dentro del sistema:', error.error)
		} else {
			console.warn(
				'Error del servidor código: ' + error.status + ', mensaje: ',
				error.error,
			)
			localStorage.setItem('errorMessage', error.error.message)
			if (error.error.errors) {
				localStorage.setItem('errors', JSON.stringify(error.error.errors))
			}
			// Si no tiene sesión iniciada entonces redireccionar a inicio
			if (error.status == 401) {
				document.cookie.split(';').forEach(function (c) {
					document.cookie = c
						.replace(/^ +/, '')
						.replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
				})
				// Limpar localstorage
				localStorage.clear()
				sessionStorage.clear()
				// Redireccionar a inicio
				window.location.href = '/'
			}
			mensaje = error.error.message
		}
		return throwError(() => new Error(mensaje))
	}
}
