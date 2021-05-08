import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);

/* export default new Vuex.Store({
  state: {messages},
  mutations: {},
  actions: {},
  modules: {},
});
 */

const store: StoreOptions<RootState> = {
  state: {
    moinMessage: "Hi from great city",
  },
  modules: {},
};


export default new Vuex.Store<RootState>(store);