<template>
  <div class="mh-screen__adjust-padding">
    <v-flex>
      <v-col>
        <app-lang-switcher btn/>
      </v-col>
    </v-flex>
    <div class="pt-3 pb-6">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto py-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <img width="160" src="/logo-dark.svg" :alt="$t('appName')">
        </div>
          <v-card flat>
            <div class="text-center text-h6 mb-6 grey--text lighten-2">
              <p class="mb-1">{{ $t('infoSentTo') }}</p>
              <p class="mb-1">{{ secretEmail }}</p>
              <p class="mb-1">{{ $t('inCaseYouDidNotReceiveLoginInfo') }}</p>
            </div>
          </v-card >
          <v-card-actions class="mb-2 px-sm-6">
            <v-btn link :to="localePath('/')"
            block color="primary" class="btn-primary py-4">
              {{ $t('technicalSupport') }}
            </v-btn>
          </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailSentPage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('infoSentTo')}`
    }
  },
  computed: {
    secretEmail() {
      if(this.$route.query.email) {
        let email = this.$route.query.email;
        let formattedEmail = email.split('@');
        let secretPart = formattedEmail[0].split('')
        .map((letter, i) => {
          if(i > 0) return '*';
          return letter.toUpperCase();
        }).join('');

        return `${secretPart}@${formattedEmail[1]}`;
      }

      return '*******';
    }
  }
}
</script>
