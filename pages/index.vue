<template>
  <div>
    <v-scroll-x-transition>
      <nuxt-child />
    </v-scroll-x-transition>
  </div>
</template>

<script>
export default {
  name: 'VendorHomePage',
  layout: 'dashboard'
}
</script>
