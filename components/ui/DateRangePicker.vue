<template>
  <div>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="dates"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          class="date-picker-input"
          v-model="dateRangeText"
          prepend-icon="mdi-calendar"
          outlined
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dates"
        range
        scrollable
        @change="updateRange"
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="modal = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialog.save(dates)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment';
const todayDate = moment(new Date()).format('YYYY-MM-DD');

export default {
  name: 'DateRangePicker',
  data: () => ({
    dates: [todayDate, todayDate],
    modal: false
  }),
  computed: {
    dateRangeText () {
      return this.dates.join('  /  ')
    },
  },
  methods: {
    updateRange(range) {
      this.$emit('update-date-range', range);
    }
  }
}
</script>
