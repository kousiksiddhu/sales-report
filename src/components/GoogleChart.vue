<!-- Generic google chart component, which can be reused with different configurations -->

<template>
  <section>
    <!-- Google chart plugin uses type, data and options attributes to generate chart. This will be dynamically passed from props. -->
    <GChart
      :type="chartType"
      :data="chartData"
      :options="chartOptions"
    />
  </section>
</template>

<script>
/**
 * Google chart npm package inclusion
 */
import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';
import { AppConstants } from '../constants/app-constants.js';

/**
 * CONSTANTS
 */
const GOOGLE_CHART = AppConstants.GOOGLE_CHART;

export default {
  name: 'GoogleChart',
  /**
   * Properties required to generate chart
   * chartType - Google chart type. Ex: LineChart, BarChart, PieChart
   * chartData - Array of xaxis and yaxis values
   * chartOptions - Google chart options
   */
  props: {
    chartType: String,
    chartData: Array,
    chartOptions: Object
  },
  components: {
    GChart
  },
  /**
   * Gets selected option
   */
  computed: mapGetters(['selectedOption']),
  /**
   * Watches for selectedOption value change and loads the chart on change
   */
  watch: {
    selectedOption(currentState){
      this.$store.dispatch('loadChart', { selectedMetric: currentState, defaultChartOptions: GOOGLE_CHART.chartOptions});
    }
  },
  /**
   * Loads the chart on create
   */
  created () {
    this.$store.dispatch('loadChart', { selectedMetric: this.selectedOption, defaultChartOptions: GOOGLE_CHART.chartOptions});
  }
}
</script>

