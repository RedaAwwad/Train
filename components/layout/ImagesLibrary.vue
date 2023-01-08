<template>
  <v-dialog
    v-model="isModalOpen"
    max-width="1200"
    scrollable
    @input="$emit('update', $event)"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="primary" class="py-3 library-controller">
        <v-icon>mdi-camera</v-icon>
      </v-btn>
    </template>

    <v-card rounded="lg">
      <div class="d-flex flex-column flex-md-row align-end align-md-center justify-md-space-between px-3 px-sm-6 py-4">
        <div class="w-100 d-flex flex-column flex-sm-row align-center gap mb-4 mb-md-0">
          <v-card-title tag="h6" class="mb-0 pa-0 font-weight-bold"
          :class="{'blue-grey darken-4' : $isDark()}">
            {{ $t('exportFromImagesLibrary') }}
          </v-card-title>

          <app-search-form border/>
        </div>
        <div class="d-flex align-center gap">
          <v-btn color="primary" class="px-4 py-1 text-subtitle-1" outlined>
            {{ $t('next') }}
          </v-btn>
          <v-btn color="primary" class="px-4 py-1 text-subtitle-1" outlined>
            {{ $t('prev') }}
          </v-btn>
        </div>
      </div>

      <v-card-text flat class="px-6 py-8" :class="{ 'grey lighten-5' : !$isDark() }">
        <v-row>
          <v-col v-for="item in 12" :key="item" cols="6" sm="4" md="3" lg="2" class="mb-4">
            <v-card @click="selectedImgID = item" flat outlined rounded="lg" 
            class="library-card d-flex flex-column align-center pa-3 cursor-pointer"
            :class="{'selected' : selectedImgID === item}">
              <div class="w-100 pa-3 mb-4 light">
                <v-img height="70" max-height="70" contain :src="productImg" />
              </div>
              <v-card-title tag="h6" class="pa-0 mb-3 primary--text">
                حليب
              </v-card-title>
              <v-card-title tag="h6" class="pa-0 primary--text">
                Milk
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="py-4 px-6" :class="{'blue-grey darken-4' : $isDark()}">
        <v-btn @click="selectedImgID = 0" color="primary" class="px-4 py-2 text-subtitle-1" text>
          {{ $t('reset') }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
        @click="isModalOpen = false">
          {{ $t('cancel') }}
        </v-btn>
        <v-btn @click="pickFile" color="primary" class="px-8 py-2 text-subtitle-1">
          {{ $t('import') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script>
  export default {
    name: 'ImagesLibrary',
    data() {
        return {
          isModalOpen: false,
          productImg: require('@/assets/imgs/icons/storefront.svg'),
          selectedImgID: 0
        }
    },
    methods: {
      pickFile() {
        if (this.selectedImgID) {
          this.$emit('input', this.selectedImgID);
        } 
      }
    },
  }
</script>
  
