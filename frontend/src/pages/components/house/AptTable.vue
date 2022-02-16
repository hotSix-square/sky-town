<template>
  <!-- 조회 테이블 start -->
  <div class="table-flex">
    <div class="table-layer" style="overflow: scroll">
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
            {{
              apt.aptInfo.sidoName +
              " " +
              apt.aptInfo.gugunName +
              " " +
              apt.aptInfo.dongName
            }}
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
                          {{ apt.aptInfo.aptName }}
                        </div>
                        <div
                          class="table-content row-fd"
                          style="margin-left: 5px"
                        >
                          <n-button
                            v-show="is_show"
                            @click="handle_toggle"
                            type="primary"
                            round
                            style="margin: 0; padding: 0.5em 1rem"
                          >
                            <i class="now-ui-icons ui-2_favourite-28"></i>
                            평가하기
                          </n-button>
                          <div v-show="!is_show">
                            <div class="star-rating space-x-4 mx-auto">
                              <input
                                type="radio"
                                id="5-stars"
                                name="rating"
                                value="5"
                                v-model="score"
                              />
                              <label for="5-stars" class="star pr-4">★</label>
                              <input
                                type="radio"
                                id="4-stars"
                                name="rating"
                                value="4"
                                v-model="score"
                              />
                              <label for="4-stars" class="star">★</label>
                              <input
                                type="radio"
                                id="3-stars"
                                name="rating"
                                value="3"
                                v-model="score"
                              />
                              <label for="3-stars" class="star">★</label>
                              <input
                                type="radio"
                                id="2-stars"
                                name="rating"
                                value="2"
                                v-model="score"
                              />
                              <label for="2-stars" class="star">★</label>
                              <input
                                type="radio"
                                id="1-star"
                                name="rating"
                                value="1"
                                v-model="score"
                              />
                              <label for="1-star" class="star">★</label>
                            </div>
                            <n-button
                              @click="handle_toggle"
                              type="primary"
                              round
                              style="margin: 0; padding: 0.5em 1rem"
                            >
                              완료
                            </n-button>
                          </div>
                        </div>
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
                            {{ apt.aptInfo.aptAddr }}
                          </div>
                        </div>
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
                            {{ apt.aptInfo.aptDongCnt }} 동 |
                            {{ apt.aptInfo.aptdaCnt }} 세대
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
                      매매 시세 {{ changeUnit(apt.aptAvg.amtAvg) }}
                    </div>
                  </div>
                </div>
                <div class="table-content min-max">
                  <div>
                    최소 {{ changeUnit(apt.aptAvg.min) }} ~ 최대
                    {{ changeUnit(apt.aptAvg.max) }}
                  </div>
                </div>
              </div>
              <div
                class="table-content"
                style="height: 11px; background-color: rgb(238, 238, 238)"
              ></div>
            </div>
            <div class="table-content">
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
                        실거래가 정보
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
                <table class="table" style="margin-bottom: 0">
                  <thead>
                    <tr>
                      <th>계약일</th>
                      <th>거래가격</th>
                      <th class="text-center">전용면적</th>
                      <th>층수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, index) in apt.aptDealList" :key="index">
                      <td>
                        {{
                          deal.dealYear +
                          "." +
                          deal.dealMonth +
                          "." +
                          deal.dealDay
                        }}
                      </td>
                      <td>{{ changeUnit(deal.dealAmount) }}</td>
                      <td>{{ deal.dealArea }}m2</td>
                      <td>{{ deal.floor }}m2</td>
                    </tr>
                  </tbody>
                </table>
                <!-- for문 끝 -->
              </div>
              <div
                class="table-content"
                style="background-color: rgb(238, 238, 238); height: 11px"
              ></div>
            </div>
            <div class="table-content" style="margin-bottom: 17%">
              <div
                class="table-content"
                style="border-top-width: 1px; border-color: rgb(238, 238, 238)"
              >
                <div
                  class="table-content"
                  style="
                    flex-direction: column;
                    flex-basis: auto;
                    background-color: rgba(255, 255, 255, 1);
                  "
                >
                  <!-- 단지 정보 start -->
                  <div
                    v-if="apt.aptInfo.codeSaleNm"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">분양형태</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.codeSaleNm }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.codeAptNm"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">단지분류</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.codeAptNm }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.codeGarbage"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">음식물처리방법</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.codeGarbage }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.aptdEcnt"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">승강기대수</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.aptdEcnt }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.aptdPcnt"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">주차대수</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.aptdPcnt + apt.aptInfo.aptdPcntu }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.codeNet"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">주차관제.홈네트워크 여부</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.codeNet }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.aptdCccnt"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">CCTV 카메라 수</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.aptdCccnt }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.aptdWtimebus"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">버스정류장 거리</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.aptdWtimebus }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.aptdWtimesub"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">지하철역 거리</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.subwayLine }}
                          {{ apt.aptInfo.subwayStation }}
                          {{ apt.aptInfo.aptdWtimesub }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.welfareFacility"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">부대시설 및 복리시설</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.welfareFacility }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.convenientFacility"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">편의시설</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.convenientFacility }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="apt.aptInfo.educationFacility"
                    class="table-content"
                    style="flex-direction: column; flex-basis: auto"
                  >
                    <div class="table-content data-row">
                      <div class="table-content field-name">
                        <div class="field-text">교육시설</div>
                      </div>
                      <div class="table-content data-style">
                        <div class="field-data">
                          {{ apt.aptInfo.educationFacility }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 단지 정보 end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 조회 table end -->
</template>

<script>
import { Button } from "@/components";
import http from "@/util/http-common";
import { mapState } from "vuex";
const memberStore = "memberStore";

export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      is_show: "false",
      score: "",
      itemId: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
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
  updated() {
    console.log("code##########", this.$route.params.code);
    var code = this.$route.params.code;
    console.log(code.length, typeof code.length);
  },
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
    handle_toggle() {
      this.is_show = !this.is_show;
      //서버랑 axios 통신
      http
        .get(`/aptscore`, {
          params: {
            userId: this.userInfo,
            itemId: this.apt.aptInfo.aptCode,
            score: this.score,
          },
        })
        .then(({ data }) => {
          console.log(data); //받아올게 없긴 함
        });
    },
  },
};
</script>

<style>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}

.star-rating input {
  display: none;
}

.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}

.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: #fff58c;
}

.field-name {
  align-items: flex-start;
  align-self: flex-start;
  flex: 33 0 0 !important;
  flex-flow: row wrap;
  overflow: visible;
  padding-left: 2px;
  padding-right: 2px;
}
.data-row {
  align-items: center !important;
  flex: 1 1 auto !important;
  flex-direction: row !important;
  min-height: 38px !important;
  padding: 9px 18px 8px !important;
}

.data-style {
  align-items: flex-start;
  align-self: flex-start;
  flex: 67 0 21% !important;
  flex-flow: row wrap;
  margin-left: 4px;
  /* flex-basis: 55% !important; */
  overflow: visible;
  padding-left: 2px;
  padding-right: 2px;
}

.field-text {
  color: rgb(117, 117, 117);
  flex-shrink: 1;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 21px;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: 0 !important;
  margin-right: 10px;
}
.field-data {
  color: rgb(34, 34, 34);
  flex-shrink: 1;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 21px;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: 0 !important;
}
</style>
