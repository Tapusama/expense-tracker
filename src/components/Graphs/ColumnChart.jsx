import * as d3 from "d3";
import { useEffect, useRef } from "react";

const BarChart = (props) => {
  const {
    height,
    width,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    data,
  } = props;
  const svgRef = useRef(null);

  // Function to draw the chart
  const drawChart = () => {
    // Remove the old chart if it exists
    d3.select(svgRef.current).selectAll("*").remove();

    // Select the SVG element and set up margins
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${marginLeft}, ${marginTop})`);

    // Set the x and y scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width - marginLeft - marginRight])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - marginTop - marginBottom, 0]);

    // Add the x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - marginTop - marginBottom})`)
      .call(d3.axisBottom(xScale));

    // Add the y-axis
    svg.append("g").call(d3.axisLeft(yScale));

    // Create a tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid #d3d3d3")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("display", "none")
      .style("pointer-events", "none")
      .style("font-size", "12px");

    // Draw the bars with mouse events for the tooltip
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr(
        "height",
        (d) => height - marginTop - marginBottom - yScale(d.value)
      )
      .attr("fill", "steelblue")
      .on("mouseover", (event, d) => {
        tooltip
          .style("display", "inline-block")
          .html(`Name: ${d.name}<br>Value: ${d.value}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 25}px`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 25}px`);
      })
      .on("mouseout", () => {
        tooltip.style("display", "none");
      });
  };

  useEffect(() => {
    if (data && data.length) {
      drawChart();
    }
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
