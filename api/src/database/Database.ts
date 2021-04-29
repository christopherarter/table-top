import { Sequelize } from 'sequelize-typescript'
import DomainService from '../DomainService';
import dotenv from 'dotenv';
dotenv.config();

export default class Database {

    private _connection: Sequelize;

    public async connect() : Promise<void>
    {
        this._connection = new Sequelize(process.env.DATABASE_CONNECTION_STRING, {
            dialect: 'postgres',
            logging: process.env.LOG === 'debug' ? console.log : false,
            models: DomainService.models(),
          })
        
        await this._connection.sync({
        alter: true
        })
    }

    public connection()
    {
        return this._connection;
    }

    public close()
    {
        this.connection().close();
    }
}