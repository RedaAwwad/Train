<template>
  <div class="comman-input upload-img-input" :class="{ 'mb-4': !noMargin }">
    <div class="lable-info d-flex justify-space-between">
      <div class="input-head">
        <label v-if="label" class="font-weight-bold">{{ label }}</label>
        <span v-if="required" class="error--text">*</span>
      </div>
      <v-tooltip v-if="info" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="grey lighten-1">
              mdi-message-question-outline
            </v-icon>
          </v-btn>
        </template>
        <span>{{ info }}</span>
      </v-tooltip>
    </div>
    <div class="d-flex align-center gap-sm" :class="[$isDark() ? '' : 'white']">
      <div class="upload-img-input__preview--container">
        <div v-for="img in uploadedImgs" :key="img.id" class="upload-img-input__preview">
          <v-btn @click="removeImg(img.id)" icon class="upload-img-input__remove white">
            <v-icon size="15" color="red">mdi-delete</v-icon>
          </v-btn>
          <modal
            max-width="600"
            title=" "
            :is-open="isModalOpen"
            @on-close="isModalOpen = true"
          >
            <template slot="controller">
              <v-img width="48px" height="100%" :src="img.url" class="upload-img-input__preview--img"/>
            </template>
            <div>
              <v-btn @click="removeImg(img.id)" icon class="upload-img-input__remove in-modal black">
                <v-icon size="15" color="white">mdi-delete</v-icon>
              </v-btn>
              <v-img width="100%" height="100%" :src="img.url" class="upload-img-input__preview--img"/>
            </div>
          </modal>
        </div>
      </div>
      <v-btn @click="chooseFile" color="primary" class="py-3 file-controller">
        <v-icon>mdi-image</v-icon>
      </v-btn>
      <images-library @input="pickImageFromLibrary"/>
      <input ref="imgInput" type="file" accept="image/png, image/gif, image/jpeg" :required="required" class="d-none" @change="pickFile" name="image">
    </div>
  </div>
</template>

<script>

export default {
  name: 'UploadImgInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Array,
    },
    label: {
      type: String,
      default: 'Image'
    },
    info: {
      type: String,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uploadedImgs: [],
      isModalOpen: true,
    };
  },
  methods: {
    pickImageFromLibrary(img) {},
    chooseFile() {
      this.$refs.imgInput.click();
    },
    pickFile(e) {
      if(e.target.files && e.target.files.length) {
        const url = URL.createObjectURL(e.target.files[0]);
        const file = {
          id: Math.floor(Math.random() * 10000),
          url,
          file: e.target.files[0]
        }

        if(this.multiple) this.uploadedImgs.push(file);
        else this.uploadedImgs = [file];

        this.updateValue(this.uploadedImgs);
      }
    },
    removeImg(id) {
      const imgs = this.uploadedImgs.filter(img => img.id !== id);
      this.uploadedImgs = imgs;
      this.updateValue(imgs);
    },
    updateValue(value) {
      this.$emit('input', value || []);
    },
  },
};
</script>
