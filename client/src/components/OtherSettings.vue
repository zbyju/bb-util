<template>
  <div class="Startup mt-10">
    <h2>Další nastavení</h2>
    <vs-row align="center" class="mt-5">
      <vs-col w="6">
        <vs-input
          primary
          label="IP Adresa SDS-Motory"
          placeholder="Výchozí: 10.1.1.5"
          v-model="config.SDSMotory"
          @input="validateMotory"
        >
          <template v-if="valid.ipMotory" #message-success>
            Hodnota je validní
          </template>
          <template v-else #message-danger>
            Hodnota není validní
          </template>
        </vs-input>
      </vs-col>
    </vs-row>

    <vs-row align="center" class="mt-5">
      <vs-col w="6">
        <vs-input
          primary
          label="IP Adresa SDS-Topení"
          placeholder="Výchozí: 10.1.1.6"
          v-model="config.SDSTopeni"
          @input="validateTopeni"
        >
          <template v-if="valid.ipTopeni" #message-success>
            Hodnota je validní
          </template>
          <template v-else #message-danger>
            Hodnota není validní
          </template>
        </vs-input>
      </vs-col>
    </vs-row>

    <vs-row align="center" class="mt-5">
      <vs-col w="6">
        <vs-input
          primary
          label="IP Adresa Kamera"
          placeholder="Výchozí: 10.1.1.7"
          v-model="config.Camera"
          @input="validateCamera"
        >
          <template v-if="valid.ipCamera" #message-success>
            Hodnota je validní
          </template>
          <template v-else #message-danger>
            Hodnota není validní
          </template>
        </vs-input>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Startup",
  data: () => {
    return {};
  },
  computed: {
    config() {
      if (this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig");
      }
      return this.$store.state.editedConfig.other;
    },
    valid() {
      return this.$store.state.valid.other;
    }
  },
  methods: {
    validateMotory(ip) {
      this.valid.ipMotory = this.validateIpAddress(ip);
    },
    validateTopeni(ip) {
      this.valid.ipTopeni = this.validateIpAddress(ip);
    },
    validateCamera(ip) {
      this.valid.ipCamera = this.validateIpAddress(ip);
    },
    validateIpAddress(ip) {
      return /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ip);
    }
  }
};
</script>

<style scoped lang="scss"></style>
