
import Restaurant from '../Restaurant';
export default (restaurant: Restaurant) => {
    return {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
    }
}