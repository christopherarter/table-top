
import { Sequelize } from 'sequelize/types';
import { Restaurant, RestaurantsSeeder } from '../domains/restaurants'
import Database from './Database';
(async () => {
    const db = new Database();
    await db.connect();
    await RestaurantsSeeder();
    await db.close();
}) ();