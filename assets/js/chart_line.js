const canvas_line = document.getElementById("myChartLine");
let myChart_line = new Chart(canvas_line, {
  type: "line",
  data: {
    labels: [
      "Hospitalization",
      "Other",
      "Life Threatening",
      "Disabling",
      "Death",
    ],
    datasets: [
      {
        label: "% of all Drug Adverse Events",

        data: [40, 59, 5, 4, 17],
        backgroundColor: [
          "rgb(205,10,52)",
          "rgb(54,162,235)",
          "rgb(255,206,86)",
          "rgb(21,134,23)",
          "rgb(140,198,238)",
        ],
      },
    ],
  },
  options: {
    // This chart will not respond to mousemove, etc
    events: ["click"],
  },
});
