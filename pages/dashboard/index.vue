<template>
  <div>
    <v-card color="transparent" class="mb-6" elevation="0">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <statistics-card title="متقدم" content="64٬624"
          :pieData="nationalitesData"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <statistics-card title="مقابلة شخصية" content="11٬225" 
          :pieData="interviewsData"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <statistics-card title="مرشح للعقود" content="7٬156" 
          :pieData="contractData"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التشغيل التجريبي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب النظري"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب العملي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب العملي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card elevation="0" class="pa-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              هدف التوظيف والمتحقق منه
            </h3>
            <bar-chart :data="[{
              name: 'Year 1990',
              data: [631, 727, 814, 841, 320, 540]
            }, {
              name: 'Year 2000',
              data: [814, 841, 631, 727, 600, 540]
            }]"/>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card elevation="0" class="pa-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              لمحة حول تحضير العمل
            </h3>
            <bar-race-chart :data="[
              ['هدف 1',  92],
              ['هدف 2',  30],
              ['هدف 32',  20],
              ['هدف ب2',  30],
              ['هدف س2',  100],
              ['هدف شس2',  40],
              ['هدف ث2',  10],
            ]"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التشغيل التجريبي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب النظري"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب العملي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <line-chart title="التدريب العملي"
          :height="200" :data="data" :x-data="xDataFilters"/>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'GeneralFilterPage',
  layout: 'dashboard',
  data() {
    return {
      chartsFilter: 'day',
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6],
      areaData: [1, 200, 400, 280, 360, 150, 120, 180, 160, 150, 300, 225, 500, 400, 380, 500, 250, 450, 400, 500, 325, 300, 500, 500],
      nationalitesData: [
        ['سعودي',  92],
        ['أجنبي',  119],
      ],
      interviewsData: [
        ['المقبولين',  33],
        ['المرفوضين',  100],
      ],
      contractData: [
        ['وقعوا عقودهم',  92],
        ['لم يوقعوا بعد',  30],
      ],
      areaX: ['01:00', '02:00', '03:00','04:00', '05:00', '06:00', '07:00','08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00','00:00']
    }
  },
  computed: {
    xDataFilters() {
      if(['day', 'week', 'month'].includes(this.chartsFilter)) {
        let filters = {
          day: [this.$t('monthsText.jan'), this.$t('monthsText.feb'), this.$t('monthsText.mar'), this.$t('monthsText.apr'), this.$t('monthsText.may'), this.$t('monthsText.jun'), this.$t('monthsText.jul'), this.$t('monthsText.aug'), this.$t('monthsText.sep'), this.$t('monthsText.oct'), this.$t('monthsText.nov'), this.$t('monthsText.dec')],
          week: [],
          month: []
        }

        return filters[this.chartsFilter];
      }

      return []
    },
  },
  methods: {},
}
</script>
