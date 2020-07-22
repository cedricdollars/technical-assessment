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
        data: [2, 10],
        backgroundColor: ["transparent"],
        borderColor: ["blue"],
      },
    ],
    labels: ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
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
