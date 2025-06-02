export interface ApiResponse<T> {
	data: T
	http: HTTP
	pages?: Pages
}
export interface HTTP {
	status: number
	message: string
	method: string
	success: boolean
}
export interface Pages {
	currentPage: number
	nextPage: number | null
	totalPages: number
	perPage: number
	totalRecords: number
	prevPage: number | null
}
