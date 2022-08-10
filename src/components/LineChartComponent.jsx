import React, { Component } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

class LineChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          type: "spline",
          inverted: false
        },
        title: {
          // text: "Solar Employment Growth by Sector, 2010-2016"
          text: ""
        },
        yAxis: {
          title: {
            text: "Number of Employees"
          }
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2017"
          },
          title: {
            text: "Year"
          }
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },

        series: [
          // {
          //   name: "Installation",
          //   data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          // },
          {
            name: "Manufacturing",
            data: [24916, 14064, 2742, 19851, 32490, 20282, 18121, 9434, 20000, 30000, 15000]
          },
          {
            name: "Sales & Distribution",
            data: [11744, 17722, 18005, 29771, 20185, 4377, 2147, 19387, 20123, 30234, 18999]
          },
          {
            name: "Project Development",
            data: [5666, 8888, 7988, 12169, 15112, 22452, 34400, 34227, 29876, 25786, 22888]
          },
          {
            name: "Other",
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111, 29000, 5001, 15999]
          }
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      },
      hoverData: null
    };
  }

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}

export default LineChartComponent;
