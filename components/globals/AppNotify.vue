<template>
    <notifications group="notify" width="400" :speed="700" :duration="6000" 
    class="app-notify">
      <template slot="body" slot-scope="props">
        <!-- {{ props }} -->
        <div class="app-notify__body" :class="props.item.type">
          <div class="icon">
            <v-icon v-if="props.item.type === 'success'" large color="white">
              mdi-check-circle
            </v-icon>
            <v-icon v-else-if="props.item.type === 'error'" large color="white">
              mdi-alert-circle
            </v-icon>
            <v-icon v-else large color="white">
              mdi-message-bulleted
            </v-icon>
          </div>
          <div class="content">
            <h5 class="title mb-3">
              {{props.item.title}}
            </h5>
            <div v-html="props.item.text">
            </div>
          </div>
          <div class="icon">
            <v-icon @click="props.close" color="white">
              mdi-close
            </v-icon>
          </div>
        </div>
      </template>
    </notifications>
  </template>
  
  <script>
  export default {
    name: 'AppNotify'
  }
  </script>
  