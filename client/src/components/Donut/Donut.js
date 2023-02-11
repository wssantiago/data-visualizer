import React from "react";
import Chart from "react-apexcharts";

function Donut(props) {
  const participation = [];
  const labels = [];

  // map through users array passed as props from Home.js (the users array from server JSON)
  // to define array of labels and participation values in order to define the percentual ones
  const users = props.users;
  users.forEach((element) => {
    participation.push(Number(element.participation));
    labels.push(element.firstName + " " + element.lastName);
  });

  // configure chart labels options according to ApexCharts
  const options = {
    labels: labels,
    dataLabels: {
      formatter: function (val) {
        let strVal = val.toString();
        let dotIndex = strVal.indexOf(".");
        if(dotIndex != -1) val = Number(strVal.substring(0, dotIndex + 3));
        return val + "%";
      },
    },
    colors: [
      "#CBD0CC",
      "#E63244",
      "#F54021",
      "#999950",
      "#00BB2D",
      "#CF3476",
      "#2A6478",
      "#FFA420",
      "#20603D",
      "#252850",
    ],
  };

  // define chart data
  const state = {
    options: options,
    series: participation,
  };

  // the ApexChart donut chart 
  return (
    <div>
      {" "}
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="480"
      />
    </div>
  );
}

export default Donut;
