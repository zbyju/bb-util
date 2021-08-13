<template>
  <div class="Utility" v-if="config">
    <h1>Utility</h1>
    <vs-row align="center">
      <a
        @click="openLink(`${config.startup.pathToProgramSettings}`)"
        target="_blank"
        class="mr-5"
      >
        <vs-card type="3">
          <template #title>
            <h3>Nastavovací stránka</h3>
          </template>
          <template #text>
            <p>
              Otevřít nastavovací stránku Babyboxu - BBNP
            </p>
          </template>
        </vs-card>
      </a>

      <template v-if="config.other">
        <a
          :href="`http://${config.other.SDSMotory}`"
          target="_blank"
          class="mr-5"
        >
          <vs-card type="3">
            <template #title>
              <h3>{{ config.other.SDSMotory }}</h3>
            </template>
            <template #text>
              <p>Otevřít jednotku motorů</p>
            </template>
          </vs-card>
        </a>
        <a
          :href="`http://${config.other.SDSTopeni}`"
          target="_blank"
          class="mr-5"
        >
          <vs-card type="3">
            <template #title>
              <h3>{{ config.other.SDSTopeni }}</h3>
            </template>
            <template #text>
              <p>Otevřít jednotku topení</p>
            </template>
          </vs-card>
        </a>
        <a :href="`http://${config.other.Camera}`" target="_blank" class="mr-5">
          <vs-card type="3">
            <template #title>
              <h3>{{ config.other.Camera }}</h3>
            </template>
            <template #text>
              <p>Otevřít kameru</p>
            </template>
          </vs-card>
        </a>
      </template>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Utility",
  data: () => {
    return {};
  },
  computed: {
    config() {
      return this.$store.state.config;
    }
  },
  methods: {
    openLink(url) {
      this.$store.dispatch("openLink", {
        link: url
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
