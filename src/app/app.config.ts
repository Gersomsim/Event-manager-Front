import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { APP_PROVIDERS } from '@infrastructure/di'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideHttpClient(), ...APP_PROVIDERS],
}
