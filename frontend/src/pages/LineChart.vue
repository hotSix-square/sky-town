<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
//import planetChartData from "./planet-data.js";
var xValues = [
  "중구",
  "종로구",
  "용산구",
  "은평구",
  "서대문구",
  "마포구",
  "광진구",
  "성동구",
  "동대문구",
];

export default {
  name: "LineChart",
  data() {
    return {
      //planetChartData: planetChartData
      planetChartData: {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              label: "미세먼지",
              data: [],
              borderColor: "red",
              fill: false,
            },
            {
              label: "초미세먼지",
              data: [],
              borderColor: "green",
              fill: false,
            },
            {
              label: "오존",
              data: [],
              borderColor: "blue",
              fill: false,
            },
            {
              label: "이산화질소 농도",
              data: [],
              borderColor: "green",
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
    var pm25 = new Array();
    var pm10 = new Array();
    var o3 = new Array();
    var no2 = new Array();
    this.dustInfo.forEach((element) => {
      pm25.push(element.pm25);
      pm10.push(element.pm10);
      o3.push(element.o3);
      no2.push(element.no2);
    });
    //값 넣어주기
    this.planetChartData.data.datasets[0].data = pm25;
    this.planetChartData.data.datasets[1].data = pm10;
    this.planetChartData.data.datasets[2].data = o3;
    this.planetChartData.data.datasets[3].data = no2;
    console.log(this.planetChartData.data.datasets);
  },
  props: {
    dustInfo: {
      type: Array,
      default: function () {
        return { message: "hello" };
      },
    },
  },
};
</script>

<style></style>
