<template>
  <div class="RestartInfo">
    <vs-row>
      <h2>Restart info</h2>
    </vs-row>
    <vs-row>
      <vs-col w="3">
        <vs-row>
          <vs-col w="12">
            <h4 class="mb-1">Aktuální čas:</h4>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="12">
            <h5>{{ now | moment("DD.MM.YYYY HH:mm:ss") }}</h5>
          </vs-col>
        </vs-row>
      </vs-col>

      <vs-col w="3">
        <vs-row>
          <vs-col w="12">
            <h4 class="mb-1">Čas babyboxu:</h4>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="12">
            <h5>{{ data[0].babyboxData.babyboxTime | moment("DD.MM.YYYY HH:mm:ss") }}</h5>
          </vs-col>
        </vs-row>
      </vs-col>

      <vs-col w="3">
        <vs-row>
          <vs-col w="12">
            <h4 class="mb-1">Rozdíl:</h4>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="12">
            <h5>{{ data[0].babyboxData.babyboxTime | moment("add", "1 second") | moment("diff", now) | duration("asSeconds") }}s</h5>
          </vs-col>
        </vs-row>
      </vs-col>

      <vs-col w="3">
        <vs-row>
          <vs-col w="12">
            <h4 class="mb-1">Poslední pokus o restart:</h4>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="12">
            <h5 v-if="data.length > 0 && data[0].restart.lastRestart">{{ data[0].restart.lastRestart | moment("DD.MM.YYYY HH:mm:ss") }}</h5>
            <h5 v-else>Nedošlo k žádnému pokusu</h5>
          </vs-col>
        </vs-row>
      </vs-col>

    </vs-row>
    <vs-row>

      <vs-table primary>
        <template #thead>
        <vs-tr>
          <vs-th>
          Čas PC
          </vs-th>
          <vs-th>
          Čas Babyboxu
          </vs-th>
        </vs-tr>
        </template>
        <template #tbody>
        <vs-tr
          v-for="tr in data"
          :key="tr.babyboxData.id"
          :data="tr"
        >
          <vs-td>
          {{ tr.babyboxData.time | moment("DD.MM.YYYY HH:mm:ss") }}
          </vs-td>
          <vs-td>
          {{ tr.babyboxData.babyboxTime | moment("DD.MM.YYYY HH:mm:ss") }}
          </vs-td>
        </vs-tr>
        </template>
      </vs-table>

    </vs-row>
  </div>
</template>

<script>
export default {
  name: "RestartInfo",
  data: () => {
    return {
      now: Date.now()
    }
  },
  computed: {
    data() {
      return this.$store.state.data
    }
  },
  created() {
    setInterval(() => {
      this.getNow()
    }, 500)
  },
  methods: {
    getNow() {
      this.now = Date.now()
    }
  },
};
</script>

<style lang="scss">
.vs-table__th {
  background-color: rgb(25, 91, 255) !important;
}
.vs-table__tr:hover .vs-table__td {
    background: rgba(90, 180, 255, 0.1) !important;
}
</style>
