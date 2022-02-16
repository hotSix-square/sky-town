<template>
  <div class="page-header clear-filter" filter-color="blue">
    <div
      class="page-header-image"
      style="background-image: url('img/header.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain class="qna">
            <div slot="header" class="logo-container">
              <h3>문의하기</h3>
            </div>

            <fg-input
              type="text"
              class="input-lg title"
              placeholder="TITLE"
              v-model="question.title"
            />
            <fg-input
              v-model="question.content"
              type="text"
              class="input-lg textarea"
              placeholder="input content..."
            />

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  @click="insertQuestion()"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >등록</a
                >
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Checkbox, Card, Button, FormGroupInput } from "@/components";
import { mapState } from "vuex";

const memberStore = "memberStore";

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
      question: {
        title: "",
        content: "",
        // writer: "",
        state: "답변대기",
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    insertQuestion() {
      this.question.writer = this.userInfo.split("@")[0];
      console.log(this.question);
      axios.post("/api/qna", this.question).then((resp) => {
        if (resp["data"] == "success") {
          alert("추가 완료");
          this.$router.push({ name: "question" });
        } else {
          alert("추가 실패");
        }
      });
    },
  },
};
</script>
<style>
.qna.card-plain {
  /* background: #fff; */
  box-shadow: none;
  max-width: 800px !important;
  font-size: 18px;
}
.textarea div {
  height: 400px !important;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
}
.title div {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
}
</style>
