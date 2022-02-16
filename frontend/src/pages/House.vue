<template>
  <div class="main-flex">
    <div class="container-flex">
      <!-- map start -->
      <div class="map-flex">
        <!-- <kakao-map /> -->
        <router-view />
        <!-- 법정동 selector start -->
        <div class="text-center mb-2 selector">
          <div
            class="form-group p-2"
            style="background-color: white; border-radius: 5px"
          >
            <select class="btn btn-primary" v-model="sido">
              <option value="null">시도</option>
              <option value="">선택</option>
              <option v-for="sido in sidolist" :key="sido.code" :value="sido">
                {{ sido.name }}
              </option>
            </select>
            <select class="btn btn-primary" v-model="gugun">
              <option value="null">구군</option>
              <option value="">선택</option>
              <option
                v-for="gugun in gugunlist"
                :key="gugun.code"
                :value="gugun"
              >
                {{ gugun.name }}
              </option>
            </select>
            <select class="btn btn-primary" v-model="dong">
              <option value="null">읍면동</option>
              <option value="">선택</option>
              <option v-for="dong in donglist" :key="dong.code" :value="dong">
                {{ dong.name }}
              </option>
            </select>
            <drop-down class="nav-item" title="주변 편의시절">
              <div
                v-for="(cat, index) in category"
                :key="index"
                style="padding: 0 1rem"
              >
                <input
                  type="checkbox"
                  :id="cat"
                  :value="cat"
                  v-model="checked"
                />
                <label :for="cat" style="margin: 5.5px">{{ cat }}</label>
              </div>
            </drop-down>
          </div>
        </div>
      </div>
      <!-- 법정동 selector end -->
      <!-- <apt-table /> -->
      <router-view name="side" :checked="checked" />
    </div>
  </div>
</template>
<script>
import { Checkbox, DropDown } from "@/components";
// import KakaoMap from "./components/house/KakaoMap.vue";
// import AptTable from "./components/house/AptTable.vue";

export default {
  name: "house-page",
  bodyClass: "house-page",
  components: {
    [Checkbox.name]: Checkbox,
    DropDown,
    // KakaoMap,
    // AptTable,
  },
  data() {
    return {
      category: [
        "관리사무소",
        "노인정",
        "문고",
        "보육시설",
        "어린이놀이터",
        "유치원",
        "자전거보관소",
        "주민공동시설",
        "커뮤니티공간",
        "휴게시설",
      ],
      checked: [],
      datacnt: 0,
    };
  },
  computed: {
    sidolist() {
      return this.$store.getters.getSidoList;
    },
    gugunlist() {
      return this.$store.getters.getGugunList;
    },
    donglist: {
      get() {
        return this.$store.getters.getDongList;
      },
      set(val) {
        this.$store.commit("setDongList", val);
      },
    },
    sido: {
      get() {
        return this.$store.getters.getSido;
      },
      set(val) {
        this.$store.commit("setSido", val);
      },
    },
    gugun: {
      get() {
        return this.$store.getters.getGugun;
      },
      set(val) {
        this.$store.commit("setGugun", val);
      },
    },
    dong: {
      get() {
        return this.$store.getters.getDong;
      },
      set(val) {
        this.$store.commit("setDong", val);
      },
    },
  },
  methods: {},
};
</script>
<style>
.dropdown {
  width: fit-content;
  margin: auto;
}
</style>
