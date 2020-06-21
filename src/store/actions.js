import salesData from "../../mock-data/monthly-sales/june-2016";

/**
 * Load chart action function. Constructs chart data and chart options.
 * @param options - options object containing selectedMetric and defaultChartOptions params
 * commits chartOptions and chartdata
 */
export const loadChart = ({ commit }, options) => {
  const chartHeader = [salesData.xaxis, options.selectedMetric.label];
  const chartData = salesData.records.map((data) => [
    data.date,
    data[options.selectedMetric.value],
  ]);
  const chartOptions = {
    ...options.defaultChartOptions,
    title: options.selectedMetric.label,
  };

  commit("chartOptions", chartOptions);
  commit("chartData", [chartHeader, ...chartData]);
};

/**
 * Sets the selected option
 * @param selectedOption - Selected drop down option with value and label properties
 */
export const setSelectedOption = ({ commit }, selectedOption) => {
  commit("selectedOption", selectedOption);
};
