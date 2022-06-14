import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: null,
    editedConfig: null,
    configLoaded: false,
    valid: {
      restart: {
        maxTimeDifference: true,
        delayToNextRestart: true,
        errorsInRowToRestart: true
      },
      other: {
        ipMotory: true,
        ipTopeni: true,
        ipCamera: true
      }
    },
    data: []
  },
  mutations: {
    mergeEditedConfig(state) {
      state.editedConfig = _.merge({}, state.config);
    },
    updateConfig(state, config) {
      state.config = _.merge(state.config, config);
    },
    updateEditedConfig(state, config) {
      state.editedConfig = _.merge(state.editedConfig, config);
    },
    addData(state, newData) {
      if (!newData || !newData.babyboxData || !newData.babyboxData.id) {
        return;
      }
      if (
        state.data.length == 0 ||
        newData.babyboxData.id != state.data[0].babyboxData.id
      ) {
        if (state.data.length < 30) {
          state.data.unshift(newData);
        } else {
          state.data.pop();
          state.data.unshift(newData);
        }
      }
    }
  },
  actions: {
    async getConfig(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/config/"
        })
          .then(response => {
            return response.data;
          })
          .then(responseConfig => {
            context.commit("updateConfig", responseConfig);
            context.commit("updateEditedConfig", responseConfig);
            context.state.configLoaded = true;
            resolve(responseConfig);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    async openLink(context, link) {
      return new Promise(() => {
        axios({
          method: "POST",
          url: "/open/",
          data: {
            link
          }
        });
      });
    },
    async putConfig(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PUT",
          url: "/config/",
          data: {
            config: context.state.editedConfig
          }
        })
          .then(response => response.data)
          .then(async data => {
            context.commit("updateConfig", data.config);
            context.commit("updateEditedConfig", data.config);
            resolve(data.config);
          })
          .catch(err => {
            console.log(err)
            reject(err);
          });
      });
    },
    async getData(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/data/"
        })
          .then(response => response.data)
          .then(data => {
            context.commit("addData", data);
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
});
