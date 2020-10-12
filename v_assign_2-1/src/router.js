import Vue from 'vue';
import Router from 'vue-router';

const Age = () => import("./views/Age.vue")
const Insurance = () => import("./views/Insurance.vue")
const Consulting = () => import("./views/Consulting.vue")

//どこでもつかえる機能の集まり = プラグインを使用する
Vue.use(Router);

export default new Router({
   // mode: "hash",
   mode: "history",
   routes: [{
      path: "/", components: {
         default: Age,
   } },  { path: "/insurance", component: Insurance }, { path: "/consulting", component: Consulting }]
})
