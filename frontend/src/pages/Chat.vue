<template>
  <div class="section-bot">
    <div id="main-content" class="container">
      <div class="row">
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="connect">웹소켓 연결:</label>
              <button
                v-show="isConnect"
                class="btn btn-default"
                type="submit"
                @click="connect"
              >
                Bot이랑 대화하기
              </button>
              <!-- <button
                v-show="!isConnect"
                class="btn btn-default"
                type="submit"
                @click="disconnect"
              >
                해제
              </button> -->
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <form class="form-inline" @submit.prevent>
            <!-- <div class="form-group"> -->
            <!-- <label for="msg">문의사항</label> -->

            <input
              type="text"
              v-model="msg"
              class="form-control"
              placeholder="내용을 입력하세요...."
            />

            <!-- </div> -->
            <button
              v-show="!isConnect"
              class="btn btn-default"
              type="submit"
              @click="sendMessage"
            >
              보내기
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped" v-show="isConnect">
            <thead>
              <tr>
                <th>메세지</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(msg, index) in message" :key="index">
                <td>{{ msg }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
  name: "chat-page",
  components: {},
  data() {
    return {
      // stompClient: null,
      message: [],
      msg: "",
      isConnect: true,
    };
  },
  methods: {
    // setConnected(connected) {
    //   //   $("#connect").prop("disabled", connected);
    //   //   $("#disconnect").prop("disabled", !connected);
    //   //   $("#send").prop("disabled", !connected);
    //   this.connected = connected;
    //   //   if (connected) {
    //   //     $("#conversation").show();
    //   //   } else {
    //   //     $("#conversation").hide();
    //   //   }
    //   //   $("#msg").html("");
    //   this.msg = "";
    // },
    connect() {
      var socket = new SockJS("/ws");
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, (frame) => {
        // this.setConnected(true);
        // this.connected = true;
        this.isConnect = true;
        console.log("Connected: " + frame);

        this.stompClient.subscribe("/topic/public", (message) => {
          this.message.push("봇: " + message.body);
          //   this.showMessage("받은 메시지: " + message.body); //서버에 메시지 전달 후 리턴받는 메시지
        });
      });
    },
    disconnect() {
      if (this.stompClient !== null) {
        this.stompClient.disconnect();
      }
      // this.setConnected(false);
      // this.connected = false;
      this.isConnect = false;
      console.log("Disconnected");
    },
    sendMessage() {
      //   let message = $("#msg").val();
      //   this.showMessage("보낸 메시지: " + this.msg);
      this.message.push("나: " + this.msg);
      this.stompClient.send("/sendMessage", JSON.stringify(this.msg), {}); //서버에 보낼 메시지
      console.log(JSON.stringify(this.msg));
      this.msg = "";
    },
    // showMessage(message) {
    //   $("#communicate").append("<tr><td>" + message + "</td></tr>");
    // },
  },
};
</script>


<style>
.section-bot {
  border-width: 10px;
  border-style: solid;
  border-color: #0291fb;
  background-color: #ffffff;
}

.form-control {
  text-align: center; /* Quirks Mode 를 위한 가운데 정렬 */
}
</style>