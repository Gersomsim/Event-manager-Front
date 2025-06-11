import { Component } from '@angular/core'
import { ComponentsModule } from '../../components/components.module'
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'app-login-page',
	imports: [
		ComponentsModule,
		ReactiveFormsModule,
		AuthLayoutComponent,
		RouterLink,
	],
	templateUrl: './login-page.component.html',
	styles: ``,
})
export class LoginPageComponent {
	form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	})
}
