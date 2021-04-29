import Reservation from './Reservation';
import faker from 'faker';
export default (count: number = 1) => {
    return [...Array(count).keys()].map( () => {
        return Reservation.build({
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            reserved_on: faker.time.recent(),
        })
    });
}