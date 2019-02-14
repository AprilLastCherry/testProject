import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import user from './store.js';

export default new vuex.Store({
    modules:{
        user:user
    }
})