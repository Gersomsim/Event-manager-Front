import { BaseEntity } from './common/base.entity'

export interface Category extends BaseEntity {
	id: string
	name: string
	description: string
	icon: string
	color: string
	slug: string
	status: string
}
