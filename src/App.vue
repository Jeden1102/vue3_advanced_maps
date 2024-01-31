<script setup lang="ts">
import AdvancedMap from './components/AdvancedMap.vue'
import markers from "./data/markers";

</script>

<template>
  <AdvancedMap :mapOptions="{
    zoom: 10,
    clickableIcons: true,
    center: { lat: 40.689247, lng: -74.044502 },
  }" apiKey="AIzaSyCMO7f1IdmC2znLs6fmVNgPwu98guyCWuY" :markers="markers"  />
</template>