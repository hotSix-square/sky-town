export const planetChartData = {
    type: "line",
    data: {
      labels: ["중구", "종로구", "용산구", "은평구", "서대문구", "마포구", "광진구", "성동구","동대문구"],
      datasets: [
        {
          label: "미세먼지",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "초미세먼지",
          data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
          backgroundColor: "rgba(5,74,41,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        },
        {
            label: "오존",
            data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3
        },
        {
            label: "이산화질소 농도",
            data: [0.166, 100.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
            backgroundColor: "rgba(255, 253, 41,.5)",
            borderColor: "#47b784",
            borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;