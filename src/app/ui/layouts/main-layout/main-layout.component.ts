import { Component, inject } from '@angular/core'
import { ComponentsModule } from '../../components/components.module'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-main-layout',
	imports: [ComponentsModule, RouterModule, CommonModule],
	templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
	private readonly route = inject(ActivatedRoute)
	private readonly router = inject(Router)

	isActive(path: string): boolean {
		return this.router.url === path
	}
}
