import React, { memo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
require("highcharts/modules/drilldown")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

const HighChartColumnGraph = (props) => {
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
  } = props;

  const options = Options
    ? Options
    : {
        colors: ["#2f2cd8"],
        chart: {
          type: "column",
          inverted: inverted ? true : false,
          height: height ? height : "",
          borderRadius: "10px",
          style: styles
            ? styles
            : {
                fontFamily: "sans-serif",
                color: "#000",
                fontWeight: "bold",
              },
          events: {
            drilldown: function (e) {
              try {
                if (!e.seriesOptions) {
                  onClickviewHandler(
                    e,
                    e.seriesOptions?.year,
                    e.seriesOptions?.name
                  );
                }
              } catch (e) {}
            },
          },
        },
        title: {
          text: title,
          align: "left",
          style: {
            color: "#262e73", // Title text color
            fontSize: "20px", // Title font size
            fontWeight: "bold", // Title font weight
          },
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          // type: "category",
          // gridLineColor: "#e6e6e6", // Vertical grid line color
          // gridLineDashStyle: "Dash", // Line style (e.g., 'Solid', 'Dash', 'Dot')
          // gridLineWidth: 1, // Grid line width
        },

        yAxis: {
          title: {
            text: titleY,
          },
          // gridLineColor: "#e6e6e6", // Horizontal grid line color
          // gridLineDashStyle: "ShortDash", // Grid line style
          // gridLineWidth: 1,
          labels: {
            format: "{value}", // Customize labels on the Y-axis
          },
        },

        tooltip: {
          headerFormat:
            '<b><span style="font-size:12px">' +
            header +
            ": </span><table>" +
            '<span style="font-size:12px;color:blue">{point.key}</span></b><table>',
          pointFormat:
            unit == ""
              ? '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:1f}' +
                unit +
                "</b></td></tr>"
              : unit == ("Lakhs" || "Rupees" || "Rs." || "Rs")
              ? '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> &#8377;{point.y:.2f}' +
                unit +
                "</b></td></tr>"
              : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.2f}' +
                unit +
                "</b></td></tr>",
          footerFormat: "</table>",
          formatter: pointerFormat
            ? function () {
                // console.log(this.points);
                return this.points.reduce(function (s, point) {
                  // console.log(point.series);
                  // console.log(point.point.options.unit);
                  // console.log(s);
                  return (
                    s +
                    "<br/>" +
                    point.series.name +
                    ": " +
                    point.y +
                    " (" +
                    point.point.options.unit +
                    ")"
                  );
                }, "<b>" + this.x + "</b>");
              }
            : console.log(""),
          shared: true,
          useHTML: true,
        },

        plotOptions: {
          series: {
            borderWidth: 0,
            allowPointSelect: true,
            dataLabels: {
              enabled: true,
            },
            point: {
              events: {
                select: function (e) {
                  //to update line color
                  this.update(
                    {
                      marker: {
                        states: {
                          select: {
                            lineWidth: 6,
                            lineColor: "red",
                            fillColor: "red",
                          },
                        },
                      },
                    },
                    true
                  );
                },
                click: function (event) {
                  try {
                    if (!this.options.drilldown) {
                      onClickviewHandler(event);
                    }
                  } catch (e) {}
                },
              },
            },
          },
        },
        series: series,
        drilldown: {
          series: drillDownDataSeries,
        },
      };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default HighChartColumnGraph;
