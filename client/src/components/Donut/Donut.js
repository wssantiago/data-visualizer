import React from "react";
import Chart from "react-apexcharts";

function Donut(props) {
  const participation = [];
  const labels = [];
  const users = props.users;
  users.forEach((element) => {
    participation.push(parseInt(element.participation));
    labels.push(element.firstName + " " + element.lastName);
  });

  const options = {
    labels: labels,
    dataLabels: {
      formatter: function (val) {
        return Math.round(val) + "%";
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

  const state = {
    options: options,
    series: participation,
    responsive: [
      {
        breakpoint: 600,
        options: options,
      },
    ],
  };

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
