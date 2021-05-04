<template>
    <div>
        <h1 class="font-bold text-lg my-4">My Restaurants</h1>
        <ul>
            <li v-for="(resturant, index) in resturants" :key="index">

            </li>
        </ul>
    </div>
</template>
<script lang="ts">

export default {
    // computed: {
    //     ...mapState('resturants', [
    //         'resturants'
    //     ])
    // }
}
</script>