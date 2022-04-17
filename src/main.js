import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import '@/style/index.js'
import 'dragula/dist/dragula.css'
import '../mock/index.js'

//引入Antd
import 'ant-design-vue/dist/antd.css'
import { FormModel, Input, Button, Icon, Menu, Layout, Dropdown, Tag, Table, Switch, Card, Tooltip, message } from 'ant-design-vue';
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Tag);
Vue.use(Table);
Vue.use(Switch);
Vue.use(Card);
Vue.use(Tooltip);
Vue.config.productionTip = false
Vue.prototype.$message = message;
// 将自动注册所有组件为全局组件

import { loading, flylineChartEnhanced, decoration8, decoration6, decoration2, scrollRankingBoard, borderBox1, borderBox13, digitalFlop, percentPond, activeRingChart } from '@jiaminghi/data-view'
Vue.use(loading)
Vue.use(flylineChartEnhanced)
Vue.use(decoration2)
Vue.use(decoration8)
Vue.use(decoration6)
Vue.use(scrollRankingBoard)
Vue.use(borderBox1)
Vue.use(borderBox13)
Vue.use(digitalFlop)
Vue.use(percentPond)
Vue.use(activeRingChart)

import * as echarts from 'echarts/core';
import { PieChart, RadarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  PieChart,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer, LegendComponent
]);
Vue.prototype.$echarts = echarts
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
