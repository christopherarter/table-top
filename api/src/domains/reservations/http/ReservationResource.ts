import Reservation from "../Reservation";

export default (reservation: Reservation) => {
    return {
        id: reservation.id,
        name: reservation.name,
    }
}