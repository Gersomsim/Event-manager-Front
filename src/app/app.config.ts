import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { APP_PROVIDERS } from '@infrastructure/di'

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), ...APP_PROVIDERS],
}
