<template>
  <div id="Index">
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image: url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <h3>Welcome!</h3>
          <h1 style="font-weight: bold">스카이 타운에 오신것을 환영합니다.</h1>
          <n-button
            type="primary"
            size="lg"
            @click="$router.push({ name: 'map' })"
            >Find House</n-button
          >
          <n-button
            v-if="userInfo"
            type="primary"
            size="lg"
            @click="$router.push({ name: 'RHouse' })"
            >매물 추천받기</n-button
          >
          <p>
            <img
              :src="cutty"
              alt="챗봇"
              @click="handle_toggle()"
              width="100"
              height="100"
            />

            <!-- <n-button type="primary" size="lg" @click="handle_toggle"
            >ChatBot</n-button
          > -->
          </p>

          <div v-show="is_show">
            <Chat />

            <!-- <button @click="handle_toggle" type="button">닫기</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { Button, Parallax } from "@/components";
import Chat from "./Chat.vue";
// import SockJS from "sockjs-client";
// import Stomp from "webstomp-client";
const memberStore = "memberStore";
import { mapState } from "vuex";

export default {
  name: "Index",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  bodyClass: "index-page",
  components: {
    Parallax,
    [Button.name]: Button,
    Chat,
  },
  data() {
    return {
      is_show: false,
      cutty: require("../assets/img/chatbot.png"),
    };
  },
  methods: {
    handle_toggle() {
      this.is_show = !this.is_show;
    },
    // connect() {
    //   var socket = new SockJS("http://localhost:9999/ws");
    //   this.stompClient = Stomp.over(socket);
    //   this.stompClient.connect({}, (frame) => {
    //     // this.setConnected(true);
    //     // this.connected = true;
    //     this.isConnect = true;
    //     console.log("Connected: " + frame);

    //     this.stompClient.subscribe("/topic/public", (message) => {
    //       this.message.push("받은 메시지: " + message.body);
    //       //   this.showMessage("받은 메시지: " + message.body); //서버에 메시지 전달 후 리턴받는 메시지
    //     });
    //   });
    // },
  },
};
</script>
<style>
</style>
