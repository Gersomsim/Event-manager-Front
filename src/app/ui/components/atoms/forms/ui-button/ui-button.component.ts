import {
	Component,
	EventEmitter,
	Input,
	Output,
	SimpleChanges,
} from '@angular/core'
import { ButtonType } from '../../../../types'

@Component({
	selector: 'app-ui-button',
	standalone: false,
	template: `@if (ready) {
		<button
			[type]="type"
			[disabled]="disabled"
			[ngClass]="classes"
			(click)="onClick()"
		>
			@if (loading) {
				<i class="fa-solid fa-spinner fa-pulse"></i>
				<span>Loading...</span>
			} @else {
				<ng-content></ng-content>
			}
		</button>
	}`,
})
export class UiButtonComponent {
	@Input() type: ButtonType = 'button'
	@Input() addClass: string =
		'bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-50'
	@Input() size: 'sm' | 'md' | 'lg' = 'md'
	@Input() rounded: 'sm' | 'md' | 'lg' | 'full' = 'sm'
	@Input() fullWidth: boolean = false
	@Input() disabled: boolean = false
	@Input() loading: boolean = false
	@Input() flex: boolean = true
	@Input() flexDirection: 'row' | 'column' = 'row'
	@Input() justifyContent:
		| 'justify-center'
		| 'justify-start'
		| 'justify-end'
		| 'justify-between'
		| 'justify-around'
		| 'justify-evenly' = 'justify-center'
	@Input() alignItems:
		| 'items-center'
		| 'items-start'
		| 'items-end'
		| 'items-baseline'
		| 'items-stretch' = 'items-center'
	@Output() click = new EventEmitter<void>()
	ready = false
	private readonly baseClasses =
		'focus:outline-none  transition-opacity duration-600'
	classes = ''

	ngOnInit() {
		this.setClass()
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['disabled'] && changes['disabled'].currentValue) {
			this.ready = false
			this.setClass()
		} else if (changes['loading']) {
			this.ready = false
			this.disabled = changes['loading'].currentValue
			this.setClass()
		} else {
			this.ready = false
			this.setClass()
		}
	}

	setClass() {
		const textSizeClasses =
			this.size === 'sm'
				? 'text-sm'
				: this.size === 'lg'
					? 'text-lg'
					: 'text-base'
		const cursorClasses = this.disabled
			? 'cursor-not-allowed'
			: 'cursor-pointer'
		const sizeClasses =
			this.size === 'sm'
				? 'px-5 py-1.5'
				: this.size === 'lg'
					? 'px-8 py-4'
					: 'px-6 py-3'
		const roundedClasses =
			this.rounded === 'sm'
				? 'rounded-sm'
				: this.rounded === 'lg'
					? 'rounded-lg'
					: this.rounded === 'full'
						? 'rounded-full'
						: 'rounded-md'
		const fullWidthClasses = this.fullWidth ? 'w-full' : ''
		const disabledClasses = this.disabled
			? 'opacity-50'
			: this.loading
				? 'opacity-50'
				: 'hover:opacity-80'
		const classOnHere = `${sizeClasses} ${roundedClasses} ${fullWidthClasses} ${cursorClasses} ${disabledClasses} ${textSizeClasses}`

		this.classes = `${this.baseClasses} ${classOnHere} ${this.addClass} ${this.flex ? 'flex gap-2' : ''} ${this.flexDirection} ${this.justifyContent} ${this.alignItems}`
		this.ready = true
	}

	onClick() {
		this.click.emit()
	}
}
