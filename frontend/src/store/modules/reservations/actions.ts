import { Reservation } from '@/types'
import { api } from '../../../services';
export default {
  /**
   * Retrieve all reservations
   * for a given user account
   * @param context
   */
  async getReservations({ $store }): Promise<void> {
    try {
      const results = await api.get('/api/reservations')
      $store.commit('SET_RESERVATIONS', results)
    } catch (e) {
      console.log(e)
    }
  },

  async cancelReservation(
    { $store },
    reservation: Reservation
  ): Promise<void> {
    try {
      const results = await api.delete(`/api/reservations/${reservation.id}`)
      $store.commit('REMOVE_RESERVATION', reservation)
    } catch (e) {
      console.log(e)
    }
  }
}
