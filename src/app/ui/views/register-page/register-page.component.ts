import { Component } from '@angular/core'
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component'
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { ComponentsModule } from '@ui/components.module'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'app-register-page',
	imports: [
		AuthLayoutComponent,
		ReactiveFormsModule,
		ComponentsModule,
		RouterLink,
	],
	templateUrl: './register-page.component.html',
	styles: ``,
})
export class RegisterPageComponent {
	form = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	})
}
