<template> 
  <ul class="flex gap-4">
      <li>{{ restaurant.name }}</li>
      <li>{{ restaurant.address }}</li>
  </ul>
</template>

<script lang="ts"> 
import { PropType } from 'vue';
import { Restaurant } from '../../types';
export default {
    props: {
        resturant: {
            type: Object as PropType<Restaurant>,
            default: () : Restaurant => ({
                name: '',
                address: '',
                user_id: null,
            })
        }
    }
}
</script>