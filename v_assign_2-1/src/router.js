//@router.js内
//^1.VueとRouterをimportで記載 + Vue.use(Router)
//^2.export default new Router({routes: [{ path: "/", component: Home }, { path: "/users", component: Users }]}) パスを作成 mode: "history"も記載しておく
//@Home.vue と Users.vue => router.jsでimport
//^3.Home.vue, Users.vueファイルを作成 + ２つともimportする
//@main.js内
//^4. main.jsでimport router from "./router";と記載 + new Vueの中に router:router;を routerと記載(ES6)
//@App.vue ※main.jsの render: h => h(App) のため内容は、App.vueで描画される
//^5. <template><div><router-view></router-view></div></template >と記載 => <router-view>でurlに対応するコンポーネントが描画される
//@App.vue
//^6. <router-link>コンポーネントを使って、クリックでURLを切り替える<router-link to="/" tag="a" class="link">Home</router-link>


//===============router.js================
import Vue from 'vue';
import Router from 'vue-router';
// momentライブラリ（年月日計算,閏年の判別可能）をimport

//import Home from './views/Home.vue';
//import Users from './views/Users.vue';
//@下記のように書いたほうがパフォーマンスが良いので下記の用に統一すること！
const Age = () => import("./views/Age.vue")
const Answers = () => import("./views/Answers.vue")
const Insurance = () => import("./views/Insurance.vue")
const Consulting = () => import("./views/Consulting.vue")
// const DateOfBirth = () => import("./views/DateOfBirth.vue")

//どこでもつかえる機能の集まり = プラグインを使用する
Vue.use(Router);

export default new Router({
   // mode: "hash",
   mode: "history",
   routes: [{
      path: "/", components: {
         default: Age,
         // DateOfBirth: DateOfBirth,
   } }, { path: "/answers", component: Answers }, { path: "/insurance", component: Insurance }, { path: "/consulting", component: Consulting }]
})
