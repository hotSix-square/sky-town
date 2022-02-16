<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image: url('img/header3.png')"
      >
      </parallax>
    </div>
    <spinner :loading="$store.state.LoadingStatus" />
    <div>
      <b-jumbotron
        v-for="index in infos"
        :key="index"
        v-bind:style="styleObject"
      >
        <div style="float: left; width: 50%; padding: 10px">
          <b-img
            :src="imgArray[1]"
            fluid
            alt="Fluid image"
            width="1000"
            height="1000"
          ></b-img>
        </div>
        <div style="float: left; width: 50%; padding: 10px">
          <template
            ><div class="title-font" v-bind:[aptname]="index.apt.aptName">
              {{ index.apt.aptName }}
            </div></template
          >
          <template
            ><div class="star-font">별점: {{ index.score }}</div></template
          >
          <hr class="my-4" />

          <p>
            {{ index.apt.aptAddr }}
          </p>
          <p>
            {{ index.apt.subwayLine }}
          </p>
          <p>대표편의시설: {{ index.apt.welfareFacility }}</p>
          <p>BUS: {{ index.apt.aptdWtimebus }}</p>
          <p>SUBWAY: {{ index.apt.aptdWtimesub }}</p>
          <p>Tel: {{ index.apt.aptTel }}</p>
        </div>

        <div style="font-size: 3rem">
          <b-iconstack font-scale="1" @click="confirm()">
            <b-icon stacked icon="circle-fill" variant="info"></b-icon>
            <b-icon
              stacked
              icon="bell-fill"
              scale="0.5"
              variant="white"
            ></b-icon>
            <b-icon stacked icon="circle" variant="danger"></b-icon>
          </b-iconstack>
          <b-icon icon="heart-fill" color="red"></b-icon>
        </div>

        <!-- <b-button variant="primary" href="#">메일로 구독받기</b-button> -->
        <!-- <b-button variant="success" href="#">좋아요+</b-button> -->
      </b-jumbotron>
    </div>
    <spinner :loading="$store.state.LoadingStatus" />
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";
import Spinner from "@/components/Spinner";

const memberStore = "memberStore";

export default {
  name: "RHouse",
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  components: {
    Spinner,
  },
  data() {
    return {
      LoadingStatus: false,
      isLoading: true,
      aptname: null,
      message: null,
      is_show: false,
      infos: {},
      styleObject: {
        margin: "50px",
        padding: "20px",
      },
      imgArray: [
        require("../assets/img/apt1.png"),
        require("../assets/img/apt2.png"),
        require("../assets/img/apt3.png"),
      ],
    };
  },
  created() {
    http.get(`/recommend`).then(({ data }) => {
      this.infos = data;
      console.log(this.infos);
    });
  },
  methods: {
    confirm() {
      // alert('이메일구독서비스를 신청 하시겠습니까?')
      if (confirm("이메일 정보수신 서비스를 신청 하시겠습니까?") == true) {
        //axios 통신으로 서버에 이메일 요청 보냄
        // http.defaults.headers["useremail"] = this.userInfo;
        console.log(this.infos[0].itemId);
        http
          .get(`/email`, {
            params: {
              address: this.userInfo,
              aptname: this.infos[0].itemId,
            },
          })
          .then(({ data }) => {
            this.message = data;
            console.log(this.message);
          });
      } else {
        //취소
        return false;
      }
    },
  },
};
</script>

<style>
.title-font {
  font-size: 3em;
  font-weight: 1000;
  color: black;
}
.star-font {
  font-size: 2em;
  font-weight: 100;
  color: hsl(347, 100%, 50%);
}
</style>
