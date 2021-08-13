<template>
  <div id="app">
    <h1 class="title">BB Utility</h1>
    <Utility class="mt-10" />
    <Form class="mt-10" />
    <RestartInfo class="mt-10" v-if="this.$store.state.data.length > 0" />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Utility from "./components/Utility.vue";
import RestartInfo from "./components/RestartInfo.vue";

export default {
  name: "App",
  components: {
    Form,
    Utility,
    RestartInfo
  },
  async created() {
    await this.$store.dispatch("getConfig");

    setInterval(async () => {
      await this.$store.dispatch("getData");
    }, 5000);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@100;200;400;500&display=swap");

:root {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --vs-text: rgb(255, 255, 255) !important;
}
html {
  min-height: 100vh;
  background-color: rgb(30, 32, 35);
  color: #fff;
}
body {
  margin: 0;
  padding: 0;
}

input,
select,
textarea {
  color: #fff !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Alata", sans-serif;
  margin-top: 0;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 75px 100px;

  input {
    background-color: rgb(20, 20, 23);
  }
  .vs-input {
    width: 100%;
  }
}

a,
a:hover,
a:focus {
  text-decoration: none;
  color: inherit;
}

h1.title {
  font-size: 3em;
}

/*  MARGIN-TOP  */
.mt-3 {
  margin-top: 15px;
}
.mt-5 {
  margin-top: 25px;
}
.mt-6 {
  margin-top: 27px;
}
.mt-7 {
  margin-top: 35px;
}
.mt-10 {
  margin-top: 50px;
}

/*  MARGIN-BOTTOM  */
.mb-1 {
  margin-bottom: 3px;
}
.mb-2 {
  margin-bottom: 10px;
}

/*  MARGIN-LEFT  */
.ml-1 {
  margin-left: 3px;
}
.ml-5 {
  margin-left: 25px;
}
.ml-10 {
  margin-left: 50px;
}

/*  MARGIN-RIGHT  */
.mr-1 {
  margin-right: 3px;
}
.mr-5 {
  margin-right: 25px;
}
.mr-10 {
  margin-right: 50px;
}

.mt-n1 {
  margin-top: -3px;
}
.mt-n2 {
  margin-top: -5px;
}
.mt-n3 {
  margin-top: -10px;
}
.mt-n4 {
  margin-top: -12px;
}
.mt-n5 {
  margin-top: -25px;
}

.pl-4 {
  padding-left: 15px;
}
.pl-5 {
  padding-left: 25px;
}
.pl-10 {
  padding-left: 50px;
}

.vs-card {
  background-color: rgb(20, 20, 23) !important;
}
</style>
