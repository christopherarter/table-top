import { Restaurant } from '@/types'
import { api } from '../../../services';

export default {
  async update({ $store }, restaurant: Restaurant): Promise<void> {
    try {
      await api.patch(`/api/restaurants/${restaurant.id}`, restaurant)
      $store.commit('UPDATE_RESTAURANT', restaurant)
    } catch (e) {
      console.log(e)
    }
  },

  async store({ $store }, restaurant: Restaurant): Promise<void> {
    try {
      const response = await api.post('/api/restaurants', restaurant)
      $store.commit('ADD_RESTAURANT', response)
    } catch (e) {
      console.log(e)
    }
  },

  async delete({ $axios, $store }, restaurant: Restaurant): Promise<void> {
    try {
      await $axios.delete('/api/restaurants', restaurant)
      $store.commit('DELETE_RESTAURANT', restaurant)
    } catch (e) {
      console.log(e)
    }
  }
}
