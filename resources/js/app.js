import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index";
import moment from "moment";

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);


Vue.filter('dateFormat', function (value) {

    return moment(value).format('DD/MM/YYYY');
});




const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index,
    },
});
