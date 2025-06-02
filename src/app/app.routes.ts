import { Routes } from '@angular/router'
import { HomePageComponent } from './ui/views/home-page/home-page.component'
import { AboutUsPageComponent } from './ui/views/about-us-page/about-us-page.component'

export const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	},
	{
		path: 'about-us',
		component: AboutUsPageComponent,
	},
]
