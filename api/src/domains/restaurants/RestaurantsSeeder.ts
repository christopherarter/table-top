import RestaurantFactory from './RestaurantFactory';

export default async () => {
    await Promise.all(RestaurantFactory(3).map(res => {
        return res.save();
    }))
}