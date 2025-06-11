import { Component, Input, forwardRef } from '@angular/core'
import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR,
	FormsModule,
} from '@angular/forms'
import { OptionType } from '@ui/types/forms/option.type'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-ui-select',
	standalone: false,
	templateUrl: './ui-select.component.html',
	styles: ``,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UiSelectComponent),
			multi: true,
		},
	],
})
export class UiSelectComponent implements ControlValueAccessor {
	@Input() options: OptionType[] = []
	@Input() placeholder: string = 'Seleccione una opción'
	@Input() disabled: boolean = false

	value: string | null = null
	onChange: (value: string | null) => void = () => {}
	onTouched: () => void = () => {}

	/**
	 * Escribe el valor en el componente
	 * @param value - El valor a escribir
	 */
	writeValue(value: string | null): void {
		this.value = value
		console.log(this.value)
	}

	/**
	 * Registra la función de cambio
	 * @param fn - Función a ejecutar cuando el valor cambia
	 */
	registerOnChange(fn: (value: string | null) => void): void {
		this.onChange = fn
	}

	/**
	 * Registra la función de toque
	 * @param fn - Función a ejecutar cuando el componente es tocado
	 */
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn
	}

	/**
	 * Establece el estado de deshabilitado del componente
	 * @param isDisabled - Estado de deshabilitado
	 */
	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled
	}

	/**
	 * Maneja el cambio de valor
	 * @param event - Evento de cambio
	 */
	onValueChange(event: Event): void {
		const select = event.target as HTMLSelectElement
		this.value = select.value
		this.onChange(this.value)
		this.onTouched()
	}
}
