const canvas_line = document.getElementById("myChartLine");
let myChart_line = new Chart(canvas_line, {
  type: "line",
  data: {
    datasets: [
      {
        data: [1, 15],
        backgroundColor: ["transparent"],
        borderColor: ["green"],
      },
      {
        data: [5, 8],
        backgroundColor: ["transparent"],
        borderColor: ["red"],
      },
      {
        data: [2, 11],
        backgroundColor: ["transparent"],
        borderColor: ["blue"],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
});
