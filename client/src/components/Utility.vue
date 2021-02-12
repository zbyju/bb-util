<template>
  <div class="Utility">
    <h1>Utility</h1>

    <vs-row align="center">
        <a @click="openLink(`${config.startup.pathToProgramSettings}`)" target="_blank" class="mr-5">
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
        <a href="http://10.1.1.5" target="_blank" class="mr-5">
            <vs-card type="3">
                <template #title>
                    <h3>10.1.1.5</h3>
                </template>
                <template #text>
                <p>
                    Otevřít jednotku motorů 10.1.1.5
                </p>
                </template>
            </vs-card>
        </a>
        <a href="http://10.1.1.6" target="_blank" class="mr-5">
            <vs-card type="3">
                <template #title>
                    <h3>10.1.1.6</h3>
                </template>
                <template #text>
                <p>
                    Otevřít jednotku topení 10.1.1.6
                </p>
                </template>
            </vs-card>
        </a>
        <a href="http://10.1.1.7" target="_blank" class="mr-5">
            <vs-card type="3">
                <template #title>
                    <h3>10.1.1.7</h3>
                </template>
                <template #text>
                <p>
                    Otevřít kameru 10.1.1.7
                </p>
                </template>
            </vs-card>
        </a>
    </vs-row>

  </div>
</template>

<script>
export default {
  name: "Utility",
  data: () => {
    return {}
  },
  computed: {
    config() {
      if(this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig")
      }
      return this.$store.state.editedConfig
    },
  },
  methods: {
      openLink(url) {
        this.$store.dispatch("openLink", {
            link: url
        }) 
      }
  }
};
</script>

<style scoped lang="scss">
</style>
