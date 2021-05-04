import Reservation from './Reservation';
import faker from 'faker';


export default (count: number = 1, overrides: object|null = {}) => {
    let collection : Reservation[] = [];
    for(let i = 0; i < count; i++)
    {
        collection.push(
            Reservation.build({
            ...overrides,
            ...{
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                reserved_on: faker.time.recent(),
                party_size: faker.datatype.number(12) || 2
            }
        })
        )
    }
}