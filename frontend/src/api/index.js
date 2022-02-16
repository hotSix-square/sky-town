import axios from "axios";
import { NAVER_LOGIN } from "@/config";

// axios 객체 생성
function apiInstance() {
  const instance = axios.create({
    baseURL: NAVER_LOGIN,
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

export { apiInstance };