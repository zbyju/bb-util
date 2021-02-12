<template>
  <div class="Startup">
    <vs-row justify="flex-start" align="center" class="mt-10">
      <div>
        <h2>Restart</h2>
      </div>
      <div class="switch switch-title">
        <vs-switch v-model="config.turnedOn" />
      </div>
    </vs-row>
    <template v-if="config.turnedOn">
      <vs-row align="center">
        <vs-col w="6">
          <vs-input
            primary
            label="Maximální prodleva před restartem [s]"
            placeholder="Výchozí: 60"
            class="mt-5"
            v-model="config.maxTimeDifference"
            @input="validateMaxTimeDifference"
          >
            <template v-if="valid.maxTimeDifference" #message-success>
              Hodnota je validní
            </template>
            <template v-else #message-danger>
              Hodnota není validní
            </template>
          </vs-input>
        </vs-col>
      </vs-row>
      <vs-row align="center">
        <vs-col w="6">
          <vs-input
            primary
            label="Doba čekání do dalšího restartu [s]"
            placeholder="Výchozí: 120"
            class="mt-7"
            v-model="config.delayToNextRestart"
            @input="validateDelayToNextRestart"
          >
            <template v-if="valid.delayToNextRestart" #message-success>
              Hodnota je validní
            </template>
            <template v-else #message-danger>
              Hodnota není validní
            </template>
          </vs-input>
        </vs-col>
      </vs-row>
      <vs-row align="center">
        <vs-col w="6">
          <vs-input
            primary
            label="Počet chyb v řadě na restart"
            placeholder="Výchozí: 6"
            class="mt-7"
            v-model="config.errorsInRowToRestart"
            @input="validateErrorsInRowToRestart"
          >
            <template v-if="valid.errorsInRowToRestart" #message-success>
              Hodnota je validní
            </template>
            <template v-else #message-danger>
              Hodnota není validní
            </template>
          </vs-input>
        </vs-col>
      </vs-row>

      <vs-row align="center" class="mt-7">
        <vs-col w="6">
          <vs-input primary label="Příkaz vykonán po překročení hranice" placeholder="Výchozí: shutdown -r -t 60" v-model="config.commandToExecuteWhenError" />
        </vs-col>
        <vs-col w="6" class="pl-5">
          <vs-tooltip right color="#000">
            <a color="#000" href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown" target="_blank">
              <vs-button flat>Pomoc</vs-button>
            </a>
            <template #tooltip>
              -r = restart, -t [s] = čas před vypnutím PC
            </template>
          </vs-tooltip>
        </vs-col>
      </vs-row>

      <vs-row align="center">
        <vs-col w="6">
          <div class="switch mt-3 ml-1">
            <p>Zrušit restart při úspěšném připojení</p>
            <vs-switch v-model="config.abortRestartIfOk" />
          </div>
        </vs-col>
      </vs-row>
    </template>
  </div>
</template>

<script>
export default {
  name: "Startup",
  computed: {
    config() {
      if(this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig")
      }
      return this.$store.state.editedConfig.restart
    },
    valid() {
      return this.$store.state.valid.restart
    }
  },
  methods: {
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    validateMaxTimeDifference(value) {
      this.valid.maxTimeDifference = /^\d+$/.test(value) && value > 0
    },
    validateDelayToNextRestart(value) {
      this.valid.delayToNextRestart = /^\d+$/.test(value) && value > 0
    },
    validateErrorsInRowToRestart(value) {
      this.valid.errorsInRowToRestart = /^\d+$/.test(value) && value > 0
    }
  }
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
