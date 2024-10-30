import React, { memo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
require("highcharts/modules/drilldown")(Highcharts);

const DonutChart = (props) => {
  const {
    series,
    title,
    titleY,
    drillDownDataSeries,
    onClickviewHandler,
    inverted,
    height = 250, // Set height for each chart
    Options,
    styles,
    header,
    unit,
    pointerFormat,
  } = props;

  function getSubtitle() {
    const totalNumber = 70;
    return `<span style="font-size: 20px">${totalNumber}</span>
              <br>
              <span style="font-size: 12px">
                  Remaining: <b> ${totalNumber}</b> %
              </span>`;
  }

  const options = Options
    ? Options
    : // Create the chart
      {
        chart: {
          renderTo: "container",
          type: "pie",
          height, // Height of each chart
          width: 250, // Width of each chart
          spacing: [10, 10, 10, 10] // Padding around each chart
        },
        title: {
            text: title??'' // This hides the chart title
          },
        subtitle: {
          useHTML: true,
          text: getSubtitle(),
          floating: true,
          verticalAlign: "middle",
          y: 30,
        },
        yAxis: {
          title: {
            text: "Total percent market share",
          },
        },
        plotOptions: {
          pie: {
            shadow: false,
          },
        },
        tooltip: {
          formatter: function () {
            return "<b>" + this.point.name + "</b>: " + this.y + " %";
          },
        },
        series: [
          {
            name: "Browsers",
            data: [
              ["Firefox", 6],
              ["MSIE", 4],
            ],
            size: "60%",
            innerSize: "70%",
            showInLegend: true,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default DonutChart;
