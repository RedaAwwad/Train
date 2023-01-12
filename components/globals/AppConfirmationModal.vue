<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="490">
      <v-card>
        <v-card-title class="font-weight-bold">
          {{ modalTitle }}
        </v-card-title>
        <v-card-text class="d-flex justify-center">
          <v-icon class="text-h1" color="primary"
            >mdi-help-circle-outline</v-icon
          >
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="red" min-width="120" dark @click="cansel()">
            إلغاء
          </v-btn>
          <v-btn color="primary" min-width="120" @click="agree()">
            موافق
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    modalTitle: {
      type: String,
      default: '',
    },
    actionName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },

  methods: {
    agree() {
      this.$emit('agree', this.actionName);
    },
    cansel() {
      this.$emit('cansel');
    },
  },
};
</script>
<style></style>
