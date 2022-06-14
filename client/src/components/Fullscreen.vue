<template>
  <div class="Startup">
    <vs-row justify="flex-start" align="center" class="mt-10">
      <div>
        <h2>Fullscreen</h2>
      </div>
      <div class="switch switch-title">
        <vs-switch v-model="config.enabled" />
      </div>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Startup",
  computed: {
    config() {
      if (this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig");
      }
      console.log(this.$store.state.editedConfig)
      return this.$store.state.editedConfig.fullscreen;
    },
  },
};
</script>

<style scoped lang="scss">
.Startup {
  .switch {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .switch-title {
    margin-bottom: 0.85em;
  }
  .vs-switch {
    margin-left: 20px;
  }
}
</style>
