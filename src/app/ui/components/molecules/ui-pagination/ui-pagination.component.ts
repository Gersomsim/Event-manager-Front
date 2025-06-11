import {
	Component,
	EventEmitter,
	Input,
	Output,
	SimpleChanges,
} from '@angular/core'
import { Params, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { Pages } from '@shared/interface/pages.interface'

@Component({
	selector: 'app-ui-pagination',
	standalone: false,
	templateUrl: './ui-pagination.component.html',
	styles: ``,
})
export class UiPaginationComponent {
	@Output() Page = new EventEmitter<number>()
	@Input() pagination!: Pages

	totalPages: number[] = []
	pages: number[] = []
	page = 1

	private url = ''

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute,
	) {
		this.route.queryParams.subscribe((params: Params) => {
			if (params.hasOwnProperty('page')) {
				this.page = params['page']
			}
		})
		const url = this.router.url.split('?')
		this.url = url[0]
	}

	ngOnInit(): void {
		this.calculatePages()
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.calculatePages()
	}

	isCurrentPage(page: number): boolean {
		return page === this.pagination?.currentPage
	}

	goToPage(page: number): void {
		this.pagination.currentPage = page
		this.pagination.prevPage =
			this.pagination.currentPage === 1
				? undefined
				: this.pagination.currentPage - 1
		this.pagination.nextPage =
			this.pagination.currentPage === this.pagination.totalPages
				? undefined
				: this.pagination.currentPage + 1
		this.calculatePages()
		this.navigate({ page })
	}

	private calculatePages() {
		this.totalPages = Array.from(
			{ length: this.pagination.totalPages },
			(_, i) => i + 1,
		)
		const start =
			this.pagination.currentPage > 5 ? this.pagination.currentPage - 5 : 0
		const end =
			this.pagination.totalPages < this.pagination.currentPage + 5
				? this.pagination.totalPages
				: this.pagination.currentPage + 4
		this.pages = this.totalPages.slice(start, end)
	}

	showingEntries(): string {
		if (this.pagination.currentPage === this.pagination.totalPages) {
			return `${this.pagination.perPage * (this.pagination.currentPage - 1) + 1} to ${this.pagination.totalRecords}`
		}
		return `${this.pagination.perPage * (this.pagination.currentPage - 1) + 1} to ${this.pagination.perPage * this.pagination.currentPage}`
	}

	private navigate(param: { page: number }): void {
		this.router.navigate([this.url], {
			queryParams: param,
			queryParamsHandling: 'merge',
		})
	}
}
