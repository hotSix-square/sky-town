import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(success, fail) {
  await api.post(`/naver/getuserlogin`).then(success).catch(fail);
}

async function logout(success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/naver/deleteToken`).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/naver/getuserinfo/${userid}`).then(success).catch(fail);
}

// function logout(success, fail)

export { login, findById, logout };
