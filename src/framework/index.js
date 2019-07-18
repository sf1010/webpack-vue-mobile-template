import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App';
import Vant from 'vant';// https://youzan.github.io/vant/#/zh-CN/intro
import 'vant/lib/index.css';
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
import { Lazyload } from 'vant';

import '@/assets/styles/normalize.min.css';

Vue.use(Vant);
Vue.use(Icon);
Vue.use(Lazyload);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
