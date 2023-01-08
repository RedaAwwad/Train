<template>
  <div class="tags">
    <div class="tag-header d-flex-between">
      <div class="tag-head text-h5 font-weight-bold">{{ tagName }}</div>
      <modal
        :title="$t('addOrEditTag')"
        :is-open="isModalOpen"
        @on-close="isModalOpen = true"
      >
        <template slot="controller">
          <v-btn color="primary" class="pt-2 pb-2" tile dark>
            {{ $t('createTag') }}
          </v-btn>
        </template>
        <m-input :label="labelName" :info="Nameinfo" required />
        <m-input :label="enLabelName" :info="enNameinfo" required />
        <m-input
          :label="labelReferenceNumber"
          :info="referenceNumberinfo"
        />

        <template slot="footer">
          <v-spacer></v-spacer>
          <div class="d-flex-between w-100">
            <div>
              <v-btn color="red" class="border-0" outlined>
                {{ $t('deleteTag') }}
              </v-btn>
            </div>
            <div class="d-flex gap-sm">
              <v-btn
                color="primary"
                class="px-8 text-subtitle-1"
                outlined
                @click="isModalOpen = false"
              >
                {{ $t('cancel') }}
              </v-btn>
              <v-btn color="primary" class="px-8 text-subtitle-1">
                {{ $t('apply') }}
              </v-btn>
            </div>
          </div>
        </template>
      </modal>
    </div>

    <v-card flat class="roles-con border-light mt-4 pt-3">
      <v-row>
        <v-col>
          <p>{{ $t('name') }}</p>
          <p>الاسم</p>
        </v-col>
        <v-col>
          <p>{{ $t('enName') }}</p>
          <p>الاسم باللغهههه الانجليزيه</p>
        </v-col>
        <v-col>
          <p>{{ $t('construction') }}</p>
          <p>الانشاء</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isModalOpen: true,
      isDataLoading: false,
      labelName: this.$t('name'),
      Nameinfo: 'NameinfoNameinfoNameinfo',
      enLabelName: this.$t('enName'),
      enNameinfo: 'NameinfoNameinfoNameinfo',
      labelReferenceNumber: this.$t('rferenceNumber'),
      referenceNumberinfo: 'ReferenceNumberinfo',
    };
  },
};
</script>

<style></style>
