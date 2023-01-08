<template>
  <v-card flat tile class="roles-con border-light">
    <div class="main-permession">
      <v-switch
        v-model="allPermession"
        :label="mainPermessionLabel"
        @click="allPermessionchecked"
      ></v-switch>
    </div>

    <div
      v-for="(permession, index) in permessions"
      :key="index"
      class="mt-1 d-flex align-center"
    >
      <div class="roles">
        <v-switch
          :label="permession.PermessionTitle"
          :input-value="permession.checked"
        ></v-switch>
      </div>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="grey lighten-1" danse>
              mdi-message-question-outline
            </v-icon>
          </v-btn>
        </template>
        <span>{{ permession.permessionInfo }}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    mainPermessionLabel: {
      type: String,
      default: '',
    },
    permessions: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      allPermession: null,
      // show: false,
    };
  },

  methods: {
    allPermessionchecked() {
      if (this.allPermession === true) {
        this.permessions.forEach((x) => (x.checked = true));
      } else {
        this.permessions.forEach((x) => (x.checked = false));
      }
    },
  },
};
</script>

<style></style>
