import { Injectable } from '@angular/core'
import { CookieService as NgxCookieService } from 'ngx-cookie-service'

@Injectable({
	providedIn: 'root',
})
export class CookieService {
	constructor(private cookieService: NgxCookieService) {}

	setCookie(key: string, value: string): void {
		this.cookieService.set(key, value)
	}

	getCookie(key: string): string | null {
		return this.cookieService.get(key)
	}

	deleteCookie(key: string): void {
		this.cookieService.delete(key)
	}

	hasCookie(key: string): boolean {
		return this.cookieService.check(key)
	}

	getAllCookies(): Record<string, string> {
		return this.cookieService.getAll()
	}

	deleteAllCookies(): void {
		this.cookieService.deleteAll()
	}
}
