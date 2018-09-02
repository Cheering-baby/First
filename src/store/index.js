/*
* @Author: Marte
* @Date:   2018-08-22 17:49:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-02 13:21:27
*/

'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)




export default new Vuex.Store({
    state: {
        data: '',
    },
    actions: {
        getData(context) {
            axios.get('../../static/mock/item.json')
             .then(function(response){
               const res = response.data
               if (res.data && res.ret){
                   context.state.data = res.data
                   console.log(context.state.data)
               }
             })
             .catch(function(error){
               console.log(error)
             })
        }
    }
})