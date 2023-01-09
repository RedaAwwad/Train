<template>
  <div class="">
    <header class="main-header py-8 mb-10">
      <div class="main-header__content">
        <h1 class="mb-4 white--text">
          التقديم للوظائف الموسمية إلدارة الحشود بقطار المشاعر المقدسة لموسم حج 1444
        </h1>
        <v-btn nuxt to="/auth/register" depressed color="white"
        class="py-3 px-6">
          <div class="d-flex align-center gap-sm font-weight-bold primary--text">
            <span>التقديم الآن</span>
            <v-icon>mdi-arrow-left-thin</v-icon>
          </div>
        </v-btn>
      </div>
    </header>
    <div class="py-10 mb-10"></div>
  </div>
</template>

<script>
export default {
  name: 'VendorHomePage',
  layout: 'home'
}
</script>
