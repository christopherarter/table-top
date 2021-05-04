import {
  BelongsTo,
    Column,
    CreatedAt,
    DeletedAt,
    ForeignKey,
    Model,
    PrimaryKey, Table,
    UpdatedAt,
  } from 'sequelize-typescript'
import { Restaurant } from '../restaurants'
  
  @Table({ tableName: 'reservations' })
  export class Reservation extends Model<Reservation> {

    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    name: string
  
    @Column
    email: string

    @Column
    party_size: number

    @Column
    reserved_for: Date
  
    @DeletedAt
    deleted_at: string
  
    @CreatedAt
    created_at: string
  
    @UpdatedAt
    updated_at: string

    @BelongsTo(() => Restaurant)
    resturant: Restaurant;

    @ForeignKey(() => Restaurant)
    restaurant_id: number;

  }
export default Reservation;  