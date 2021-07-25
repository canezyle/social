/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from "vuetify";
Vue.use(Vuetify);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Index page
 */
Vue.component('front', require('./components/front/index/Index').default);
Vue.component('login', require('./components/front/index/Login').default);
Vue.component('register', require('./components/front/index/Register').default);

/**
 * Home pages
 */
Vue.component('news-feed', require('./components/front/home/page/NewsFeed').default);


/**
 * System UI
 */
Vue.component('nav-menu', require('./components/front/home/ui/NavMenu').default);
Vue.component('side-menu', require('./components/front/home/ui/SideBar').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
