/**
 * All app constants will be declared here
 */
export class AppConstants {
  static GOOGLE_CHART = {
    chartType: "LineChart",
    defaultMetricValue: "sales",
    metricTypes: [
      {
        label: "Overall sales",
        value: "sales",
      },
      {
        label: "Overall orders",
        value: "orders",
      },
      {
        label: "Page views",
        value: "pageViews",
      },
      {
        label: "Click through rate",
        value: "clickThruRate",
      },
    ],
    chartOptions: {
      height: 500,
      legend: {
        position: "top",
        alignment: "center",
      },
      pointsVisible: true,
    },
  };
}
