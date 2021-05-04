import {
    Column,
    CreatedAt,
    DeletedAt,
    HasMany,
    Model,
    PrimaryKey, Table,
    UpdatedAt
  } from 'sequelize-typescript'
import { Reservation } from '../reservations'
  
  @Table({ tableName: 'restaurants' })
  export class Restaurant extends Model<Restaurant> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    name: string
  
    @Column
    address: string
  
    @DeletedAt
    deleted_at: string
  
    @CreatedAt
    created_at: string
  
    @UpdatedAt
    updated_at: string

    @HasMany(() => Reservation)
    reservations: Reservation[]
  }
export default Restaurant;  