export interface CrudRepository<T, ID> {
	findAll(filters?: any): Promise<T[]>
	findById(id: ID): Promise<T>
	create(entity: Partial<T>): Promise<T>
	update(id: ID, entity: Partial<T>): Promise<T>
	delete(id: ID): Promise<T>
}
