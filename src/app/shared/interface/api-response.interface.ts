import { IndexResponse } from './index-response.interface'

export interface ApiResponse<T> extends IndexResponse<T> {
	http: HTTP
}
export interface HTTP {
	status: number
	message: string
	method: string
	success: boolean
}
