<template>
  <ul class="flex flex-col gap-4 divide-y">
    <li v-for="(reservation, index) in reservations" :key="index">
      <Reservation :reservation="reservation" />
    </li>
  </ul>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { Restaurant } from '../../types'
import Reservation from './Reservation.vue'
export default {
  components: {
    Reservation
  },
  computed: {
    reservations() {
      return this.$store.getters['reservations/byRestaurantId'](
        this.restaurant.id
      )
    }
  },
  props: {
    restaurant: {
      type: Object as PropType<Restaurant>,
      required: true
    }
  }
}
</script>
