class customChart {
  // Retrieve each chart element index
  static getClicksEventDn() {
    const canvas_doghnut = document.getElementById("myChartDoghnut");
    canvas_doghnut.onclick = (evt) => {
      let activePoints = myChart.getElementsAtEvent(evt);
      activePoints.length !== 0 ? console.dir(activePoints) : 0;
    };
  }
}

customChart.getClicksEventDn();
