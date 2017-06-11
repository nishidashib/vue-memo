import Vue from 'vue';
import App from './App';

/* eslint-disable no-new */

/*
tempklateとcomponents両方指定するのかな、、たぶんね。。
*/
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})