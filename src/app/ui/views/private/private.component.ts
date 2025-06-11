import { Component } from '@angular/core'
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-private',
	imports: [AdminLayoutComponent, RouterOutlet],
	templateUrl: './private.component.html',
	styles: ``,
})
export class PrivateComponent {}
