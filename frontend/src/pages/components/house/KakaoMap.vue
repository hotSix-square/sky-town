<template>
  <!-- <div> -->
  <!-- <div>{{ sidolistvuex }}</div> -->
  <div id="map" class="flex" style="width: 100%; height: 100%"></div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "KakaoMap",
  data() {
    return {
      isFirst: true,
      sidolist_init: [],
      datacnt: 0,
      geocoder: null,
      markers: [],
      map: null,
      clusterImage: [],
      customOverlay: [],
      findp: 0,
    };
  },
  mounted() {
    this.sido = null;
    axios.get("/map/sido").then((resp) => {
      //   this.$store.commit("setSidoList", resp.data);
      this.sidolist_init = resp.data;
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fda17085e526213a297440847222d514&libraries=services";
        document.head.appendChild(script);
      }
    });
  },
  watch: {
    datacnt() {
      if (this.datacnt == this.sidolist_init.length) {
        this.$store.commit("setSidoList", this.sidolist_init);
        this.displayCluster("Sido", this.sidolist_init);
      }
    },
    sido(val) {
      console.log("sido 바뀜???", val);
      this.gugun = null;
      this.dong = null;
      // 구군 좌표 가져오기
      if (val.code != null) {
        if (this.isFirst) {
          this.isFirst = false;
          this.$router.push({
            name: "grpApt",
            params: { code: val.code },
          });
        } else {
          this.$router.replace({
            name: "grpApt",
            params: { code: val.code },
          });
        }
        axios
          .get("/map/gugun", {
            params: { sido: val.code },
          })
          .then((resp) => {
            // console.log(resp.data);
            resp.data.nextZoneList.forEach((gugun) => {
              var addr = val.name + " " + gugun.name;
              this.findPlace(gugun, addr);
              // console.log(gugun);
            });
            // console.log(resp.data);
            setTimeout(() => {
              this.gugunlist = resp.data.nextZoneList;
              this.aptlist = resp.data.aptBasicList;
              this.sido.aptCnt = Number(resp.data.aptCnt);
              this.sido.totalCnt = Number(resp.data.totalCnt);
              this.displayCluster("Gugun", this.gugunlist);
              console.log(this.sido);
              // console.log("gugunlist", this.gugunlist);
            }, 1000);
          });
      }
    },
    gugun(val) {
      console.log("gugun 바뀜!!!", val);
      this.dong = null;
      // 동 좌표 가져오기
      if (val.code != null) {
        this.$router.replace({
          name: "grpApt",
          params: { code: val.code },
        });
        axios
          .get("/map/dong", {
            params: { gugun: val.code },
          })
          .then((resp) => {
            resp.data.nextZoneList.forEach((dong) => {
              var addr = this.sido.name + " " + val.name + " " + dong.name;
              this.findPlace(dong, addr);
            });
            setTimeout(() => {
              this.donglist = resp.data.nextZoneList;
              this.aptlist = resp.data.aptBasicList;
              this.gugun.aptCnt = Number(resp.data.aptCnt);
              this.gugun.totalCnt = Number(resp.data.totalCnt);
              this.displayCluster("Dong", resp.data.nextZoneList);
              console.log("donglist", resp.data);
            }, 1000);
          });
      }
    },
    dong(val) {
      console.log("dong 바뀜!!!!!", val);
      this.findp = 0;
      // 아파트 정보 + 좌표 가져오기
      if (val.code != null) {
        this.$router.replace({
          name: "grpApt",
          params: { code: val.code },
        });
        axios
          .get("/map/list", {
            params: {
              dong: val.code,
            },
          })
          .then((resp) => {
            console.log(resp.data);
            resp.data.aptBasicList.forEach((data) => {
              this.findPlace(data, data.aptAddr);
            });
            console.log("resp.data.length", resp.data.aptBasicList.length);
            setTimeout(() => {
              this.dong.totalCnt = Number(resp.data.totalCnt);
              this.dong.aptCnt = Number(resp.data.aptCnt);
              this.aptlist = resp.data.aptBasicList;
              this.displayMarker(this.aptlist);
            }, 300 * resp.data.aptBasicList.length);
          });
      }
    },
    // findp() {
    //   if (this.findp == this.aptlist.length) {
    //   }
    // },
  },
  computed: {
    sidolist() {
      return this.$store.getters.getSidoList;
    },
    gugunlist: {
      get() {
        return this.$store.getters.getGugunList;
      },
      set(val) {
        this.$store.commit("setGugunList", val);
      },
    },
    donglist: {
      get() {
        return this.$store.getters.getDongList;
      },
      set(val) {
        this.$store.commit("setDongList", val);
      },
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
  methods: {
    findPlace(object, addr) {
      // console.log(addr);
      // console.log(object.aptName);
      var adr = addr.split(" ").reduce((val, str) => {
        if (object.aptName == str) {
          // console.log(str);
          return val;
        } else {
          return val + " " + str;
        }
      });
      console.log(adr);
      this.geocoder.addressSearch(adr, (resp, status) => {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          // console.log("나와라!!!", resp);
          object.latlng = new Array(Number(resp[0].y), Number(resp[0].x));
          // this.findp++;
        }
      });
    },
    displayCluster(type, array) {
      console.log(array);
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      if (this.customOverlay.length > 0) {
        this.customOverlay.forEach((over) => over.setMap(null));
      }

      const positions = array
        .map((arr) => arr.latlng)
        .map((position) => new kakao.maps.LatLng(...position));

      var avg = array.reduce((val, ary) => {
        return val + Number(ary.amtAvg);
      }, 0);
      avg /= array.length;
      console.log(avg);
      var dev = array.reduce((val, ary) => {
        return val + Math.abs(avg - Number(ary.amtAvg));
      }, 0);
      dev /= array.length;
      console.log(dev, typeof dev);
      var standup = avg + dev,
        standdown = avg - dev;
      // console.log(standup, standdown);
      if (positions.length > 0) {
        this.customOverlay = array.map((position) => {
          var size;
          // console.log(array[index].name, array[index].amtAvg);
          if (position.amtAvg >= standup) {
            size = "rgba(255, 54, 54, 0.9)";
          } else if (position.amtAvg <= standdown) {
            size = "rgba(2, 145, 251, 0.9)";
          } else {
            size = "rgba(255, 178, 54, 0.9)";
          }

          // console.log(position.amtAvg, position.amtAvg.length);

          var len = position.amtAvg.length;
          var unit = "";
          // console.log(
          //   position.amtAvg.substr(0, len - 4),
          //   position.amtAvg.substr(len - 4, 1)
          // );
          if (len >= 5) {
            unit += position.amtAvg.substr(0, len - 4) + "억 ";
          }
          if (position.amtAvg.substr(len - 4, 1) != "0") {
            unit += position.amtAvg.substr(len - 4, 1) + "천";
          }

          var content = document.createElement("div");
          content.className = "overlay";
          content.style.cursor = "pointer";
          content.style.backgroundColor = size;
          var name = document.createElement("div");
          name.className = "overlay-name";
          name.innerText = position.name;
          var avg = document.createElement("div");
          avg.innerText = unit;
          content.appendChild(name);
          content.appendChild(avg);

          const customOverlay = new kakao.maps.CustomOverlay({
            map: this.map,
            position: new kakao.maps.LatLng(...position.latlng),
            content: content,
            zIndex: position.amtAvg,
            clickable: true,
          });

          content.onclick = () => {
            this.$store.commit("set" + type, position);
          };
          return customOverlay;
        });

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    displayMarker(array) {
      // console.log(name, array);
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      if (this.customOverlay.length > 0) {
        this.customOverlay.forEach((over) => over.setMap(null));
      }

      const positions = array
        .map((arr) => arr.latlng)
        .map((position) => new kakao.maps.LatLng(...position));
      console.log(positions);

      if (positions.length > 0) {
        this.markers = array.map((apt) => {
          const pos = new kakao.maps.LatLng(...apt.latlng);
          const marker = new kakao.maps.Marker({
            map: this.map,
            position: pos,
            clickable: true,
          });
          kakao.maps.event.addListener(marker, "click", () => {
            this.$router.push({
              name: "apt",
              params: { code: apt.aptCode },
            });
            // 마커 클릭 이벤트 등록
            axios.get("/apt/" + apt.aptCode).then((resp) => {
              resp.data.latlng = pos;
              this.$store.commit("setApt", resp.data); // 클릭한 아파트 정보 저장
              console.log("apt 정보 저장", resp.data);
            });
          });
          return marker;
        });

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(36.2683, 127.6358),
        level: 12,
      };

      // 지도를 생성합니다
      this.map = new kakao.maps.Map(container, options);
      // 주소-좌표 변환 객체를 생성합니다
      this.geocoder = new kakao.maps.services.Geocoder();

      this.sidolist_init.forEach((sido) => {
        // console.log(this.findPlace(sido.sidoName));
        this.geocoder.addressSearch(sido.name, (result, status) => {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            // console.log(new kakao.maps.LatLng(result[0].y, result[0].x));
            sido.latlng = new Array(Number(result[0].y), Number(result[0].x));
            this.datacnt++;
          }
        });
      });
    },
  },
};
</script>

<style>
</style>