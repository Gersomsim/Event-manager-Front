import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MainLayoutComponent } from './ui/layouts/main-layout/main-layout.component'
import { initFlowbite } from 'flowbite'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, MainLayoutComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'Event-Manager'
	ngOnInit() {
		initFlowbite()
	}
}
