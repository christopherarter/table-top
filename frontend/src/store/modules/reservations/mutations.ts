import { Reservation } from '@/types'

export default {
  SET_RESERVATIONS(state, payload: Reservation[]) {
    state.reservations = payload
  },

  REMOVE_RESERVATION(state, payload: Reservation): void {
    state.reservations = state.reservations.splice(
      state.reservations.indexOf(payload),
      1
    )
  }
}
