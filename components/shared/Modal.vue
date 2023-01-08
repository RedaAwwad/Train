<template>
  <v-dialog
    v-model="isActive"
    :max-width="maxWidth"
    :scrollable="scrollable"
    @input="$emit('update', $event)"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs"
        v-on="on">
        <slot name="controller"></slot>
      </div>
    </template>

    <v-card rounded="lg">
      <v-card-title tag="h2" class="text-h5 py-4 px-6 font-weight-bold"
      :class="{'blue-grey darken-4' : $isDark()}">
        {{ title }}
      </v-card-title>

      <v-card-text flat class="pa-6" :class="{ 'grey lighten-5' : !$isDark() }">
        <slot></slot>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="py-4 px-6" :class="{'blue-grey darken-4' : $isDark()}">
        <slot name="footer"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true
    },
    maxWidth: {
      type: [String, Number],
      default: '550'
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    isOpen: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    isOpen(newStatus) {
      if(!newStatus) {
        this.isActive = false;
        this.$emit('on-close');
      }
    }
  }
}
</script>
