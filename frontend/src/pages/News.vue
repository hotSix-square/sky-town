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
        <h3 class="title">부동산뉴스 TOP10</h3>

        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with custom text -->
          <news-list-row
            v-for="(info, index) in infos"
            :key="index"
            v-bind="info"
          />
        </b-carousel>

        <p class="mt-4">
          Slide #: {{ slide }}<br />
          Sliding: {{ sliding }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
import NewsListRow from "@/pages/NewsListRow";

export default {
  name: "News",
  components: {
    NewsListRow,
  },
  data() {
    return {
      infos: {},
    };
  },
  created() {
    http.get(`/crawling`).then(({ data }) => {
      //console.log(data.slice(0,10));
      this.infos = data.slice(0,10);
      console.log(this.infos);
    });
  },
};
</script>
<style></style>
