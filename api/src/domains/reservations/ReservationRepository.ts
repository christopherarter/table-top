import Reservation from "./Reservation";
import ReservationFactory from "./ReservationFactory";

export default class ReservationRepository {
    public all() : Array<Reservation> 
    {
        return ReservationFactory(5);
    }
}