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
              <h3>Create an Account!</h3>
            </div>

            <!-- <fg-input type="text" class="input-lg" placeholder="ID" />
            <fg-input type="password" class="input-lg" placeholder="PASSWORD" />
            <fg-input
              type="password"
              class="input-lg"
              placeholder="REPEAT PASSWORD"
            />
            <fg-input type="text" class="input-lg" placeholder="NAME" />
            <fg-input type="text" class="input-lg" placeholder="EMAIL" /> -->

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Register</a
                >
              </div>
              <div>
                <h6>
                  <router-link :to="{ name: 'login' }" class="link footer-link"
                    >Already have an account? Login!</router-link
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

export default {
  name: "qna-form-page",
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
    };
  },
};
</script>
<style></style>
