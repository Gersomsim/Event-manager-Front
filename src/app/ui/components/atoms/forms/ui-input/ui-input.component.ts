import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	ViewChild,
	forwardRef,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { InputType } from '@ui/types/forms/input.type'
import { distinctUntilChanged, fromEvent, Subject, takeUntil } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
	selector: 'app-ui-input',
	templateUrl: './ui-input.component.html',
	standalone: false,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UiInputComponent),
			multi: true,
		},
	],
})
export class UiInputComponent
	implements ControlValueAccessor, AfterViewInit, OnDestroy
{
	@ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>

	@Input() type: InputType = 'text'
	@Input() id?: string
	@Input() placeholder = ''
	@Input() disabled = false

	public valueChanges$ = new Subject<any>()
	private destroy$ = new Subject<void>()

	onChange: (value: any) => void = () => {}
	onTouched: () => void = () => {}

	// Valor actual sincronizado
	private currentValue: any = ''

	ngAfterViewInit(): void {
		// Sincroniza el valor inicial
		this.updateInputValue(this.currentValue)

		// Configura el observable de cambios
		this.setupValueChanges()
	}

	private setupValueChanges(): void {
		fromEvent(this.inputElement.nativeElement, 'input')
			.pipe(
				map((event: Event) => (event.target as HTMLInputElement).value),
				distinctUntilChanged(),
				takeUntil(this.destroy$),
			)
			.subscribe((value) => {
				this.currentValue = value
				this.onChange(value)
				this.valueChanges$.next(value)
			})
	}

	// --- Métodos de ControlValueAccessor ---
	writeValue(value: any): void {
		this.currentValue = value
		this.updateInputValue(value)
	}

	private updateInputValue(value: any): void {
		if (this.inputElement?.nativeElement) {
			this.inputElement.nativeElement.value =
				value !== null && value !== undefined ? value : ''
		}
	}

	registerOnChange(fn: any): void {
		this.onChange = fn
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled
		if (this.inputElement?.nativeElement) {
			this.inputElement.nativeElement.disabled = isDisabled
		}
	}

	// --- Lifecycle Hook ---
	ngOnDestroy(): void {
		this.destroy$.next()
		this.destroy$.complete()
		this.valueChanges$.complete()
	}
}
