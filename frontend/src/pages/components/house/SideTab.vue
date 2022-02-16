<template>
  <!-- 조회 테이블 start -->
  <div class="table-flex">
    <div class="table-layer">
      <!-- 제목+ 뒤로 가기 -->
      <div class="table-wrapper table-content">
        <div class="table-icon">
          <div class="table-content" style="margin-left: 13px">
            <div class="tab-back" @click="back">
              <div style="pointer-events: none" class="table-content">
                <div class="icon-box table-content">
                  <div class="icon">
                    <i class="now-ui-icons arrows-1_minimal-left icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-title">
            <template v-if="sido != null">
              {{ sido.name }}
            </template>
            <template v-if="gugun != null">
              {{ gugun.name }}
            </template>
            <template v-if="dong != null">
              {{ dong.name }}
            </template>
            <!-- {{ sido.name + " " + gugun.name + " " + dong.name }} -->
          </div>
          <div
            class="table-content"
            style="height: 11px; background-color: rgb(238, 238, 238)"
          ></div>
        </div>

        <!-- 리스트 상세 내용 -->
        <div class="table-content" style="flex: 1 1 0%">
          <div class="content-detail table-content">
            <!-- 제목, 단지 수, 세대 수 => 기본 정보 -->
            <div class="table-content">
              <div
                class="table-content"
                style="background-color: rgb(255, 255, 255); flex-basis: auto"
              >
                <div class="table-content detail-child">
                  <div class="title-box table-content">
                    <div class="table-content pm-set">
                      <div class="table-content title-div">
                        <div class="title table-content">
                          {{ type.name }}
                        </div>
                        <div
                          class="table-content row-fd"
                          style="margin-left: 5px"
                        ></div>
                      </div>
                      <div
                        class="table-content"
                        style="
                          align-items: flex-start;
                          flex-direction: row;
                          overflow: visible;
                        "
                      >
                        <div class="table-content detail-data">
                          <div class="detail-text">
                            {{ type.totalCnt }} 단지 | {{ type.aptCnt }} 세대
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="table-content"
                style="height: 11px; background-color: rgb(238, 238, 238)"
              ></div>
            </div>
            <div
              class="table-content"
              style="background-color: rgb(255, 255, 255); flex-basis: auto"
            >
              <div class="table-content avg-box">
                <div class="table-content avg">
                  <div class="table-content avg-text">
                    <div class="avg-text-css">
                      매매 시세 {{ changeUnit(type.amtAvg) }}
                    </div>
                  </div>
                </div>
                <div class="table-content min-max">
                  <div>평당가 {{ changeUnit(type.areaAvg) }}</div>
                </div>
              </div>
              <div
                class="table-content"
                style="height: 11px; background-color: rgb(238, 238, 238)"
              ></div>
            </div>
            <div class="table-content" style="flex: 1 1 auto">
              <div
                class="table-content"
                style="flex-basis: auto; background-color: rgb(255, 255, 255)"
              >
                <div
                  class="table-content aptlist-title"
                  style="background-color: rgb(255, 255, 255)"
                >
                  <div class="table-content aptlist-title-text">
                    <div
                      class="table-content"
                      style="
                        flex-direction: row;
                        align-items: center;
                        overflow: visible;
                      "
                    >
                      <div class="table-content list-text-title">
                        거래 많은 순
                      </div>
                    </div>
                  </div>
                  <div class="table-content plus-btn">
                    <div class="table-content plus-align-center">
                      <i class="now-ui-icons ui-1_simple-add"></i>
                    </div>
                  </div>
                  <div
                    class="table-content"
                    style="
                      background-color: rgba(0, 0, 0, 0);
                      inset: 0px;
                      position: absolute;
                    "
                  ></div>
                </div>
                <div
                  class="table-content"
                  style="background-color: rgba(0, 0, 0, 0)"
                >
                  <div
                    class="table-content"
                    style="background-color: rgb(238, 238, 238); height: 1px"
                  ></div>
                </div>
                <!-- for문 시작 -->
                <div
                  class="table-content"
                  v-for="(apt, index) in aptlist"
                  :key="index"
                  @click="routeApt(apt)"
                >
                  <div
                    v-show="isExistFacility(apt.welfareFacility)"
                    class="table-content"
                    style="background-color: rgb(255, 255, 255)"
                  >
                    <div class="table-content list-content">
                      <div
                        class="table-content"
                        style="
                          justify-content: center;
                          flex-direction: column;
                          flex: 1 1 0%;
                        "
                      >
                        <div
                          class="apt-name"
                          style="
                            font-size: 16px;
                            line-height: 21px;
                            margin-top: 0;
                            font-weight: bold;
                          "
                        >
                          {{ apt.aptName }}
                        </div>
                        <div class="apt-name">
                          시세 {{ changeUnit(apt.amtAvg) }} |
                          {{ apt.aptDongCnt }} 동 {{ apt.aptdaCnt }} 세대
                        </div>
                        <div class="apt-name">{{ apt.aptAddr }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- for문 끝 -->
              </div>
            </div>
            <div class="table-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 조회 table end -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  props: {
    checked: Array,
  },
  computed: {
    type() {
      switch (this.$route.params.code.length) {
        case 2:
          return this.sido;
        case 5:
          return this.gugun;
        case 8:
          return this.dong;
        default:
          return this.apt;
      }
    },
    sidolist() {
      return this.$store.getters.getSidoList;
    },
    gugunlist() {
      return this.$store.getters.getGugunList;
    },
    donglist() {
      return this.$store.getters.getDongList;
    },
    aptlist: {
      get() {
        return this.$store.getters.getAptList;
      },
      set(val) {
        this.$store.commit("setAptList", val);
      },
    },
    apt: {
      get() {
        return this.$store.getters.getApt;
      },
      set(val) {
        this.$store.commit("setApt", val);
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
  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeUnit(data) {
      var len = data.length;
      var unit = "";
      if (len >= 5) {
        unit += data.substr(0, len - 4) + "억 ";
      }
      if (data.substr(len - 4, 1) != "0") {
        unit += data.substr(len - 4, 1) + "천";
      }
      return unit;
    },
    routeApt(apt) {
      this.$router.push({
        name: "apt",
        params: { code: apt.aptCode },
      });

      axios.get("/apt/" + apt.aptCode).then((resp) => {
        // resp.data.latlng = pos;
        this.$store.commit("setApt", resp.data); // 클릭한 아파트 정보 저장
        console.log("apt 정보 저장", resp.data);
      });
    },
    isExistFacility(data) {
      console.log("편의시설 있는지 확인하자   ", data);
      if (this.checked.length == 0) {
        return true;
      } else if (
        data == undefined ||
        data == null ||
        this.checked.length == 0
      ) {
        return false;
      } else {
        var list = data.split(",").map((el) => el.replace(" ", ""));
        console.log(list, this.checked);

        var isTrue = true;
        this.checked.forEach((element) => {
          var isExist = list.includes(element);
          if (!isExist) {
            isTrue = false;
          }
        });
        return isTrue;
      }
    },
  },
};
</script>

<style>
</style>