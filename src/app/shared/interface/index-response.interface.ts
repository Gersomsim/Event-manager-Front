import { Pages } from './pages.interface'

export interface IndexResponse<T> {
	data: T
	pages?: Pages
}
