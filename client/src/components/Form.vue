<template>
  <div class="Form">
    <h1>Nastavení</h1>
    <template v-if="configLoaded">
      <Startup />
      <Restart />

      <vs-button
        success
        gradient
        class="submit"
        @click="submit"
      >
        Uložit
      </vs-button>
    </template>
  </div>
</template>

<script>
import Startup from "./Startup";
import Restart from "./Restart";
import _ from "lodash";

export default {
  name: "Form",
  data: () => {
    return {
      notification: null,
      changeMade: false
    }
  },
  computed: {
    config() {
      if(this.$store.state.editedConfig == null) {
        this.$store.commit("mergeEditedConfig")
      }
      return this.$store.state.editedConfig
    },
    configLoaded() {
      return this.$store.state.configLoaded
    },
    valid() {
      return this.$store.state.valid
    }
  },
  components: {
    Startup,
    Restart
  },
  methods: {
    async submit() {
      if(this.formValid()) {
        try {
          await this.$store.dispatch("putConfig")
          this.openNotification(5000, "top-right", "success", "Data úspěšně uložena", "Data, která jste zadali do formuláře, byla úspěšně uložena.")
        } catch(err) {
          console.log(err)
          this.openNotification(5000, "top-right", "danger", "Data se nepodařilo uložit.", "Data, která jste zadali do formuláře, nebyla úspěšně uložena.")
        }
      } else {
        this.openNotification(5000, "top-right", "danger", "Chyba dat", "Ve formulářových datech je chyba, proto je nelze uložit.")
      }
    },
    openNotification(duration, position = null, color, title, text) {
      return this.$vs.notification({
        duration,
        color,
        position,
        title,
        text
      })
    },
    closeNotification() {
      this.notification.close()
    },
    formValid() {
      let valid = true
      for(let key in this.valid.restart) {
        if(!this.valid.restart[key]) {
          valid = false
        }
      }
      return valid
    },
  },
  watch: {
    config: {
      deep: true,
      handler: function() {
        this.changeMade = !_.isEqual(this.$store.state.editedConfig, this.$store.state.config)
      }
    },
    changeMade(newValue) {
      if(newValue == true) {
        this.notification = this.openNotification("none", "bottom-center", "dark", "Neuložené změny", "Provedli jste změny, které nebyly uloženy! Pro uložení stiskněte tlačítko pod formulářem.")
      } else {
        if(this.notification) {
          this.notification.close()
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Form {
  .submit {
    padding: 1px 8px;
    font-size: 1.1em;
    font-weight: 500;
    margin-top: 25px;
  }
}
</style>
