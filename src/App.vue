<template>
  <div id="app">
    <!-- START: DropDown component - Charts gets dynamically constructed on value change -->
    <DropDown :selected="defaultMetricValue" :options="metricTypes" />
    <!-- END: DropDown component -->

    <!-- START: GoogleChart component section - Generic chart component that can be reused across the site -->
    <GoogleChart
      :chartType="chartType"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
    <GoogleChart
      chartType="ColumnChart"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
    <GoogleChart
      chartType="BarChart"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
    <!-- END: GoogleChart component section - Generic chart component that can be reused across the site -->
  </div>
</template>

<script>
import GoogleChart from "./components/GoogleChart.vue";
import DropDown from "./components/DropDown.vue";
import { AppConstants } from "./constants/app-constants.js";
import { mapGetters } from "vuex";

/**
 * CONSTANTS
 */
const GOOGLE_CHART = AppConstants.GOOGLE_CHART;

export default {
  name: "App",
  components: {
    DropDown,
    GoogleChart,
  },
  /**
   * Gets chartData and chartOptions from the state
   */
  computed: mapGetters(["chartData", "chartOptions"]),
  data() {
    return {
      /**
       * Constant data values
       */
      defaultMetricValue: GOOGLE_CHART.defaultMetricValue,
      metricTypes: GOOGLE_CHART.metricTypes,
      chartType: GOOGLE_CHART.chartType,
    };
  },
};
</script>
