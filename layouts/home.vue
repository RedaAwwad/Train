<template>
  <v-app>
    <app-navbar />

    <v-main class="pt-0">
      <v-scroll-x-transition>
        <Nuxt />
      </v-scroll-x-transition>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',
  data() {
    return {};
  },
  computed: {
    sidebarLinks() {
      return [
        {
          icon: 'mdi-widgets',
          title: this.$t('home'),
          to: this.localePath('/'),
          children: [],
        },
        {
          icon: 'mdi-food-turkey',
          title: this.$t('orders'),
          to: this.localePath('/orders'),
          children: [],
        },
        {
          icon: 'mdi-account-group',
          title: this.$t('customers'),
          to: this.localePath('/customers'),
          children: [],
        },
        {
          icon: 'mdi-chart-line',
          title: this.$t('reports'),
          to: this.localePath('/reports'),
          children: [
            {
              title: this.$t('sales'),
              to: this.localePath('/reports'),
            },
            {
              title: this.$t('analytics'),
              to: this.localePath('/reports/analytics'),
            },
            {
              title: this.$t('payments'),
              to: this.localePath('/reports/payments'),
            },
            {
              title: this.$t('stockLevels'),
              to: this.localePath('/reports/stock-levels'),
            },
            {
              title: this.$t('stockmovement'),
              to: this.localePath('/reports/stock-movement'),
            },
            {
              title: this.$t('stockDate'),
              to: this.localePath('/reports/stock-date'),
            },
            {
              title: this.$t('more'),
              to: this.localePath('/reports/more'),
            },
          ],
        },
        {
          icon: 'mdi-store',
          title: this.$t('stock'),
          to: this.localePath('/stock'),
          children: [
            {
              title: this.$t('stockStuff'),
              to: this.localePath('/stock'),
            },
            {
              title: this.$t('suppliers'),
              to: this.localePath('/stock/suppliers'),
            },
            {
              title: this.$t('purchaseOrders'),
              to: this.localePath('/stock/purchase-orders'),
            },
            {
              title: this.$t('transfers'),
              to: this.localePath('/stock/transfers'),
            },
            {
              title: this.$t('stockChecking'),
              to: this.localePath('/stock/checking'),
            },
            {
              title: this.$t('stockProduction'),
              to: this.localePath('/stock/production'),
            },
            {
              title: this.$t('more'),
              to: this.localePath('/stock/more'),
            },
          ],
        },
        {
          icon: 'mdi-cart',
          title: this.$t('products'),
          to: this.localePath('/products'),
          children: [
            {
              title: this.$t('categories'),
              to: this.localePath('/products/'),
            },
            {
              title: this.$t('products'),
              to: this.localePath('/products/items'),
            },
            {
              title: this.$t('collectingProducts'),
              to: this.localePath('/products/collecting'),
            },
            {
              title: this.$t('giftCards'),
              to: this.localePath('/products/gift-cards'),
            },
            {
              title: this.$t('theAdditions'),
              to: this.localePath('/products/additions'),
            },
            {
              title: this.$t('additionsOptions'),
              to: this.localePath('/products/addition-options'),
            },
          ],
        },
        {
          icon: 'mdi-storefront',
          title: this.$t('store'),
          to: this.localePath('/store'),
          children: [
            {
              title: this.$t('nqdeStore'),
              to: this.localePath('/store'),
            },
            {
              title: this.$t('myStore'),
              to: this.localePath('/store/my-store'),
            },

            {
              title: this.$t('thirdPartyApplications'),
              to: this.localePath('/store/third-party-applications'),
            },
          ],
        },
        {
          icon: 'mdi-cog',
          title: this.$t('administration'),
          to: this.localePath('/admin'),
          children: [
            {
              title: this.$t('users'),
              to: this.localePath('/admin/users'),
            },
            {
              title: this.$t('roles'),
              to: this.localePath('/admin/roles'),
            },
            {
              title: this.$t('branches'),
              to: this.localePath('/admin/branches'),
            },
            {
              title: this.$t('devices'),
              to: this.localePath('/admin/devices'),
            },
            {
              title: this.$t('discounts'),
              to: this.localePath('/admin/discounts'),
            },
            {
              title: this.$t('coupons'),
              to: this.localePath('/admin/coupons'),
            },
            {
              title: this.$t('theOffers'),
              to: this.localePath('/admin/offers'),
            },
            {
              title: this.$t('tempEvents'),
              to: this.localePath('/admin/events'),
            },
            {
              title: this.$t('workShifts'),
              to: this.localePath('/admin/work-shifts'),
            },
            {
              title: this.$t('custody'),
              to: this.localePath('/admin/custody'),
            },
          ],
        },
        {
          icon: 'mdi-more',
          title: this.$t('more'),
          to: this.localePath('/more'),
          children: [],
        },
      ];
    },
  },
};
</script>
