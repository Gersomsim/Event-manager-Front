import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.scss'],
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
})
export class ContactPageComponent {
	/**
	 * Formulario de contacto
	 */
	contactForm: FormGroup

	/**
	 * Constructor del componente
	 * @param fb - FormBuilder para crear el formulario reactivo
	 */
	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			nombre: ['', [Validators.required, Validators.minLength(2)]],
			email: ['', [Validators.required, Validators.email]],
			asunto: ['', [Validators.required, Validators.minLength(5)]],
			mensaje: ['', [Validators.required, Validators.minLength(10)]],
		})
	}

	onSubmit(): void {
		if (this.contactForm.valid) {
			console.log('Formulario enviado:', this.contactForm.value)
			this.contactForm.reset()
		}
	}
}
