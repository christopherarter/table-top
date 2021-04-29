import { Sequelize } from 'sequelize/types';
import Restaurant from './Restaurant'
import RestaurantFactory from './RestaurantFactory';
import { RepositoryInterface } from '../../interfaces';
export default class RestaurantRepository implements RepositoryInterface {

    public async all() : Promise<Array<Restaurant>>
    {
        return Restaurant.findAll();
    }

    public async findById(key: any) : Promise<Restaurant | null> {
        return Restaurant.findByPk(key);
    }

    // this payload should probably be a DTO or type.
    public async add(payload: any) : Promise<Restaurant>
    {
        return Restaurant.create(payload);
    }

    public async delete(key: any) : Promise<void>
    {
        const record = await this.findById(key);
        return record.destroy();
    }

    public query() : Sequelize
    {
        return Restaurant.sequelize
    }
}