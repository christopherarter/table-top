import faker from 'faker';
import Restaurant from './Restaurant';

export default (count: number = 1) => {
    return [...Array(count).keys()].map( () => {
        return Restaurant.build({
            name: faker.company.companyName(),
            address: faker.address.streetAddress(),
        })
    });
}