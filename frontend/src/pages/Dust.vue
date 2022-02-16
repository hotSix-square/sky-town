<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image: url('img/header.jpg')"
      >
      </parallax>
    </div>
    <div class="section">
      <div class="container">
        <div id="app">
          <h3 class="title">서울시 실시간 미세먼지 현황</h3>
          <LineChart v-if="infos !== null" v-bind:dustInfo="infos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";
import LineChart from "./LineChart.vue";

export default {
  name: "App",
  components: {
    LineChart,
  },
  data() {
    return {
      infos: null,
    };
  },
  created() {
    http.get(`/ajax/dustInfo`).then(({ data }) => {
      this.infos = data;
      console.log(this.infos);
      console.log(typeof this.infos); //object
    });
  },
};
</script>
