<!--  <template>
//   <div>
//     <h6>성공적으로 로그인 되었습니다^^</h6>
//     <a v-on:click="getUserInfo()">메인페이지로 이동 하기</a>
//   </div>
// </template> -->

<template>
  <div class="page-header clear-filter" filter-color="blue">
    <div
      class="page-header-image"
      style="background-image: url('img/header.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <h3>Welcome!</h3>
              <h3>성공적으로 로그인 되었습니다.</h3>
            </div>
            <fg-input @click="confirm()" type="text" class="input-lg" placeholder="메인페이지로 돌아가기"/>
            <!-- <b-button type="button" variant="primary" class="m-1" @click="getUserInfo()">메인페이지로</b-button> -->
            </card>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { Checkbox, Card, Button, FormGroupInput } from "@/components";
import { mapActions } from "vuex";
const memberStore = "memberStore";
// import axios from 'axios';
export default {
  name: "loginok-page",
  bodyClass: "login-page",
  components: {
    Card,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      checked: true,
      infos: {},
    };
  },
  methods: {
    // getUserInfo: function () {
    //   axios.get("http://localhost:9999/naver/getuserinfo").then(( data ) => {
    //     this.infos = data;
    //     console.log(this.infos);
    //     //여기서 세션에 유저 정보 넣어주는 일 해야함
    //     window.open("http://localhost:8080/", "_blank");    
    //   });
    // },
...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm();
      let token = sessionStorage.getItem("access-token");
      console.log("그럼 여기 토큰은??"+token);
      console.log('정상로그인???')
      await this.getUserInfo(token);
      this.$router.push({ name: "index" });
    },

  },
};
</script>

<style></style>
