import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import memberStore from "@/store/modules/memberStore.js";
import spinnerStore from "@/store/modules/spinnerStore.js";

export default new Vuex.Store({
  state: {
    sidolist: [],
    gugunlist: [],
    donglist: [],
    aptlist: [],
    sido: null,
    gugun: null,
    dong: null,
    apt: null,
  },
  getters: {
    getSidoList(state) {
      return state.sidolist;
    },
    getGugunList(state) {
      return state.gugunlist;
    },
    getDongList(state) {
      return state.donglist;
    },
    getAptList(state) {
      return state.aptlist;
    },
    getSido(state) {
      return state.sido;
    },
    getGugun(state) {
      return state.gugun;
    },
    getDong(state) {
      return state.dong;
    },
    getApt(state) {
      return state.apt;
    },
  },
  mutations: {
    setSidoList(state, payload) {
      state.sidolist = payload;
    },
    setGugunList(state, payload) {
      state.gugunlist = payload;
    },
    setDongList(state, payload) {
      state.donglist = payload;
    },
    setAptList(state, payload) {
      state.aptlist = payload;
    },
    setSido(state, payload) {
      state.sido = payload;
    },
    setGugun(state, payload) {
      state.gugun = payload;
    },
    setDong(state, payload) {
      state.dong = payload;
    },
    setApt(state, payload) {
      state.apt = payload;
    },
  },
  modules: {
    memberStore,
    spinnerStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
  actions: {},
});
