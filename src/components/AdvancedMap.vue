<script setup lang="ts">
import { defineProps } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import { AdvancedMapsProps } from "../types/inteface";

defineProps<AdvancedMapsProps>()
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="mapOptions.center" :zoom="mapOptions.zoom">
    <Marker v-for="marker, key in markers" :options="marker">
      <InfoWindow v-if="mapOptions.clickableIcons">
        <div :class="`adv-map adv-map__marker adv-map__marker--${key}`">
          {{ key }}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
</template>

<style lang="css"></style>
