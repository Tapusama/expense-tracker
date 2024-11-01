import React, { memo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
require("highcharts/modules/drilldown")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

const StackedColumnChart = (props) => {
  const {
    series,
    title,
    titleY,
    drillDownDataSeries,
    onClickviewHandler,
    inverted,
    height,
    Options,
    styles,
    header,
    unit,
    pointerFormat,
    xAxis,
    type,
    stacking,
  } = props;

  const options = Options
    ? Options
    : {
        chart: {
          type: "column",
        },
        title: {
          text: title,
          align: "left",
          style: {
            color: "#262e73", // Title text color
            fontSize: "20px", // Title font size
            fontWeight: "bold", // Title font weight
          },
          margin: 40, // Adjusts the space between the title and the chart
          y: 30, // Adjusts the vertical position of the title
          x: 20, // Add left margin (increase or decrease to adjust position)
        },
        xAxis: {
          type: xAxis ? xAxis : "category",
          gridLineWidth: 1, // Enables vertical grid lines on the x-axis
          gridLineColor: "#f7f7f7", // Color for vertical grid lines
          min: 0, // Set the minimum value to 0 to ensure lines start from the base
        },
        yAxis: {
          title: {
            text: titleY,
          },
          labels: {
            format: "{value}", // Customize labels on the Y-axis
          },
          gridLineWidth: 0, // Disables horizontal grid lines on the y-axis
        },
        legend: {
          align: "center",
          //   x: 70,
          //   verticalAlign: 'top',
          //   y: 70,
          //   floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "white",
          //   borderColor: '#CCC',
          //   borderWidth: 1,
          //   shadow: false
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b><br/>",
          pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
          backgroundColor: "#000", // Background color
          borderColor: "#333333", // Border color
          borderRadius: 8, // Rounded corners
          borderWidth: 1, // Border width
          shadow: true, // Adds a shadow to the tooltip
          style: {
            color: "#fff", // Text color
            fontSize: "14px", // Font size
            fontWeight: "bold", // Font weight
            fontFamily: "Arial, sans-serif", // Font family
          },
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: series,
      };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default StackedColumnChart;
