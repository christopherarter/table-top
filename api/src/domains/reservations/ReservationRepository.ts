import { Sequelize } from "sequelize/types";
import { RepositoryInterface } from "../../interfaces";
import Reservation from "./Reservation";
import ReservationFactory from "./ReservationFactory";

export default class ReservationRepository implements RepositoryInterface {

    public async all() : Promise<Array<Reservation>>
    {
        return Reservation.findAll();
    }

    public findById(key: any) : Promise<Reservation | null> {
        return Reservation.findByPk(key);
    }

    // this payload should probably be a DTO or type.
    public async add(payload: any) : Promise<Reservation>
    {
        return Reservation.create(payload);
    }

    public async delete(key: any) : Promise<void>
    {
        const record = await this.findById(key);
        return record.destroy();
    }

    public query() : Sequelize
    {
        return Reservation.sequelize
    }
}