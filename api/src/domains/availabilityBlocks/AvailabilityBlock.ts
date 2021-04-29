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
  
  @Table({ tableName: 'availability_blocks' })
  export class Reservation extends Model<Reservation> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @BelongsTo(() => Restaurant)
    restaurant;

    @ForeignKey(() => Restaurant)
    restaurant_id: number

    @Column
    guests_per_time_frame: number;

    @Column
    time_frame_minutes: number;

    @Column
    block_start: string;

    @Column
    block_end: string;

  }
  
export default Reservation;  