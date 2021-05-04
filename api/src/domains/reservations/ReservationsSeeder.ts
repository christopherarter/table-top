import ReservationFactory from './ReservationFactory'
import { RestaurantRepository } from '../restaurants'
import { Reservation } from '.';
import { DatabaseSeederInterface } from '../../interfaces/DatabaseSeederInterface';

export default class ReservationSeeder implements DatabaseSeederInterface {

    public async up() : Promise<void> {

        (await new RestaurantRepository()
        .all())
        .forEach( async restaurant => {
            await Reservation.bulkCreate(
                await Promise.all(ReservationFactory(5, {
                    restaurant_id: restaurant.id
                }))
            );
        });
    
        await Promise.all(ReservationFactory(3).map(res => {
            return res.save();
        }))
    }

    public async down() : Promise<void> {
        Reservation.destroy({ truncate: true })
    }
}
