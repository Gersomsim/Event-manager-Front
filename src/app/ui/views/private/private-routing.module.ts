import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PrivateComponent } from './private.component'
import { MyEventsPageComponent } from './my-events-page/my-events-page.component'
import { EventDetailPageComponent } from '../event-detail-page/event-detail-page.component'
import { CategoriesPageComponent } from './categories-page/categories-page.component'
import { LocationsPageComponent } from './locations-page/locations-page.component'

const routes: Routes = [
	{
		path: '',
		component: PrivateComponent,
		children: [
			{
				path: 'events',
				component: MyEventsPageComponent,
			},
			{
				path: 'events/:id',
				component: EventDetailPageComponent,
			},
			{
				path: 'categories',
				component: CategoriesPageComponent,
			},
			{
				path: 'locations',
				component: LocationsPageComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PrivateRoutingModule {}
