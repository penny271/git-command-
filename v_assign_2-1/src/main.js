import Vue from 'vue'
import App from './App.vue'
import router from './router';
// momentライブラリ（年月日計算,閏年の判別可能）をimportする
import moment from './moment';
//- fontAwesomeをimport
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// アイコンを読み込み
library.add(fas, far, fab)
// Vueコンポーネントを作成
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
   // router:router,
   router,
   moment,
   render: h => h(App),
}).$mount('#app')
