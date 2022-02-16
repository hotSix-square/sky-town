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
              <h3>Welcome Back!</h3>
            </div>
            <fg-input type="text" class="input-lg" placeholder="ID" />
            <fg-input type="password" class="input-lg" placeholder="PASSWORD" />
            <n-checkbox v-model="checked" class="input-lg"
              >Remember Me</n-checkbox
            >
            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Login</a
                >
              </div>
              <div class="card-footer text-center">
                <a
                  href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=FssPbW4KG1cD9O8YXEhN&state=state&redirect_uri=http://localhost:9999/naver/callback"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >네이버로그인</a
                >
              </div>
              <!-- <b-button
              type="button"
              variant="primary"
              class="m-1"
              @click="confirm"
              >네이버로그인</b-button
            > -->
              <div>
                <h6>
                  <router-link
                    :to="{ name: 'register' }"
                    class="link footer-link"
                    >Create Account!</router-link
                  >
                </h6>
              </div>
              <div>
                <h6>
                  <router-link
                    :to="{ name: 'findPassword' }"
                    class="link footer-link"
                    >Forgot Password?</router-link
                  >
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checkbox, Card, Button, FormGroupInput } from "@/components";
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "login-page",
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
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError"]),
  },
  methods: {
 ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      //await this.userConfirm(this.user);
      //window.location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=FssPbW4KG1cD9O8YXEhN&state=state&redirect_uri=http://localhost:9999/naver/callback";
      
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        console.log("로그인 됫댜");
        await this.getUserInfo(token);
        this.$router.push({ name: "index" });
      }
    },
   },
};
</script>
<style></style>
