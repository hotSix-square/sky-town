import jwt_decode from "jwt-decode";
import { login, logout } from "@/api/member.js";
import { findById } from "../../api/member";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userConfirm({ commit }) {
      await login(
        (response) => {
          console.log(response);
          if (response.data.message === "SUCCESS") {
            let token = response.data["access-token"];
            console.log("token: ",token);
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.setItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => {}
      );
    },
    async userLogoutConfirm({commit}){
      await logout(
        (response) => {
          console.log(response);
          sessionStorage.removeItem("access-token");
          commit("SET_IS_LOGIN", false);
          commit("SET_USER_INFO",null);
        },
        () => {}
      );
    },
    getUserInfo({ commit }, token) {
      let decode_token = jwt_decode(token);
      console.log("decode_token",decode_token.userid);
      commit("SET_USER_INFO", decode_token.userid);
      findById(
        decode_token.userid,
        (response) => {
          if (response.data.message === "SUCCESS") {
            commit("SET_USER_INFO", decode_token.userid);
          } else {
            console.log("유저 정보 없음!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default memberStore;