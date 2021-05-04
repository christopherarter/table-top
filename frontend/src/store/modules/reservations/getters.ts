export default {
  byRestaurantId: (state, restaurantId: number) => {
    return state.reservations.filter(
      reservation => reservation.resturant_id == restaurantId
    )
  }
}
