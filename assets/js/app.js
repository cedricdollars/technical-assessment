class customChart {
  // Retrieve each chart element index
  static getClicksEventDn() {
    const canvas_doghnut = document.getElementById("myChartDoghnut");
    canvas_doghnut.onclick = (evt) => {
      let activePoints = myChart_doghnut.getElementsAtEvent(evt);
      activePoints.length !== 0 ? console.dir(activePoints) : 0;
    };
  }
  static getEventMouseOver() {
    const canvas_doghnut = document.getElementById("myChartDoghnut");
    canvas_doghnut.onmouseover = event => {
      let activePoints = myChart_doghnut.getElementsAtEvent(event);
        activePoints.length !== 0 ? console.dir(activePoints) : console.error('doesn\'t works');
    }
  }

  static getClicksEventLn() {
    const canvas_line = document.getElementById("myChartLine");
    canvas_line.onclick = (evt) => {
      let activePoints = myChart_line.getElementsAtEvent(evt);
      activePoints.length !== 0 ? console.dir(activePoints) : 0;
    };
  }
}
//customChart.getEventMouseOver();
customChart.getClicksEventDn();
customChart.getClicksEventLn();

