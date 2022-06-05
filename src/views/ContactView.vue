<template>
  <div class="contact">
    <SettingsMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import SettingsMenu from "@/components/SettingsMenu.vue";

export default {
  name: "HomeView",
  components: {
    SettingsMenu,
  },
};
</script>
