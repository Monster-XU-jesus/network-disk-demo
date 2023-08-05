<template>
  <div class="Cloud-Disk">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "Cloud-Disk",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("./assets/font/icon.css");
@import url("./assets/css/public.css");
</style>
