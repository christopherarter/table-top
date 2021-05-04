
import { Sequelize } from 'sequelize/types';
import { Restaurant, RestaurantsSeeder } from '../domains/restaurants'
import Database from './Database';
import dotenv from 'dotenv';
import { ReservationsSeeder } from '../domains/reservations';
dotenv.config();

(async () => {
    if(process.env.APP_ENV !== 'production')
    {
        const db = new Database();
        await db.connect();
        await RestaurantsSeeder();
        await ReservationsSeeder();
        await db.close();
    }
})();