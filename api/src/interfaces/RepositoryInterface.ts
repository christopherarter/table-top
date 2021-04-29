import { Sequelize } from "sequelize/types";

export default interface RepositoryInterface {
    all() : Promise<Array<any>>;
    findById(key: any) : Promise<any | null>;
    add(payload: any) : Promise<any>;
    delete(key: any) : Promise<void>;
    query() : Sequelize;
}