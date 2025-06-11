import { Routes } from '@angular/router'
import { HomePageComponent } from './ui/views/home-page/home-page.component'
import { AboutUsPageComponent } from './ui/views/about-us-page/about-us-page.component'
import { EventListPageComponent } from './ui/views/event-list-page/event-list-page.component'
import { EventDetailPageComponent } from './ui/views/event-detail-page/event-detail-page.component'
import { ContactPageComponent } from './ui/views/contact-page/contact-page.component'
import { RegisterPageComponent } from './ui/views/register-page/register-page.component'
import { LoginPageComponent } from './ui/views/login-page/login-page.component'

export const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	},
	{
		path: 'about-us',
		component: AboutUsPageComponent,
	},
	{
		path: 'events',
		component: EventListPageComponent,
	},
	{
		path: 'events/:id',
		component: EventDetailPageComponent,
	},
	{
		path: 'contact',
		component: ContactPageComponent,
	},
	{
		path: 'register',
		component: RegisterPageComponent,
	},
	{
		path: 'login',
		component: LoginPageComponent,
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./ui/views/private/private-routing.module').then(
				(m) => m.PrivateRoutingModule,
			),
	},
]
