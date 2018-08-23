var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light1", // "light1", "light2", "dark1", "dark2"
  title:{
    text: "Working hours over the year"
  },
  data: [{
    type: "column", //change type to bar, line, area, pie, etc
    //indexLabel: "{y}", //Shows y value on all Data Points
    indexLabelFontColor: "#5A5757",
    indexLabelPlacement: "outside",
    dataPoints: [
      { x: 40, y: 2 },
      { x: 80, y: 5 },
      { x: 120, y: 6 },
      { x: 160, y: 4 },
      { x: 200, y: 22, indexLabel: "Highest" },
      { x: 240, y: 10 },
      { x: 280, y: 5 },
      { x: 320, y: 8 },
      { x: 360, y: 1, indexLabel: "Lowest" }
    ]
  }]
});

chart.render();