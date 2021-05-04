<template>
  <ul class="flex gap-4">
    <li>{{ reservation.name }}</li>
    <li>{{ reservation.email }}</li>
    <li>{{ reservedFor }}</li>
    <li>
      <button
        aria-label="Delete Reservation"
        class="bg-gray-200 px-2 py-1 rounded"
        @click="$emit('reservation-deleted', this.reservation)"
      >
        Delete Reservation
      </button>
    </li>
  </ul>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { Reservation } from '../../types'
import dayjs from 'dayjs'
export default {
  computed: {
    reservedFor(): string {
      return dayjs(this.reservation.reserved_for).format('M/D/YYYY h:m a')
    }
  },
  props: {
    reservation: {
      type: Object as PropType<Reservation>,
      default: (): Reservation => ({
        name: '',
        email: '',
        reserved_for: new Date(),
        resturant_id: null,
        party_size: 1
      })
    }
  }
}
</script>
