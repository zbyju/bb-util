<template>
  <div class="Startup mt-10">
    <h2>Po spuštění</h2>

    <vs-row align="center" class="mt-5">
      <vs-col w="6">
        <vs-input
          primary
          label="Cesta k programu (jen do kořene složky - např. C:\BB\)"
          placeholder="Výchozí: C:\BB\"
          v-model="config.pathToProgramFolder"
          :key="programKey"
        />
      </vs-col>
      <vs-col w="6" class="pl-5">
        <vs-button @click="insertDefaultProgramPath"
          >Doplnit standardní cestu</vs-button
        >
      </vs-col>
    </vs-row>

    <vs-row align="center" class="mt-5">
      <vs-col w="6">
        <vs-input
          primary
          label="Cesta k prohlížeči"
          placeholder="Výchozí: C:\Program Files\Internet Explorer\iexplore.exe"
          v-model="config.pathToBrowser"
          :key="browserKey"
        />
      </vs-col>
      <vs-col w="6" class="pl-5">
        <vs-row>
          <vs-button @click="insertDefaultIEPath">Doplnit cestu IE</vs-button>
          <vs-button @click="insertDefaultEdgePath">Doplnit cestu Edge</vs-button>
          <vs-button @click="insertDefaultFirefoxPath"
            >Doplnit cestu Firefox</vs-button
          >
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Startup",
  data: () => {
    return {
      programKey: 0, //To force update the input text
      browserKey: 0 //To force update the input text
    };
  },
  computed: {
    config() {
      if (this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig");
      }
      return this.$store.state.editedConfig.startup;
    }
  },
  methods: {
    insertDefaultProgramPath() {
      this.config.pathToProgramFolder = "C:\\BB\\";
      ++this.programKey;
    },
    insertDefaultIEPath() {
      this.config.pathToBrowser =
        "C:\\Program Files\\Internet Explorer\\iexplore.exe";
      ++this.browserKey;
    },
    insertDefaultFirefoxPath() {
      this.config.pathToBrowser =
        "C:\\Program Files\\Mozilla Firefox\\firefox.exe";
      ++this.browserKey;
    },
    insertDefaultEdgePath() {
      this.config.pathToBrowser =
        "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
      ++this.browserKey;
    }
  }
};
</script>

<style scoped lang="scss"></style>
