import Vue from 'vue'
import Vuex from 'vuex'
// import example from './module-example'

// import router from '../router'
// import createPersistedState from 'vuex-persistedstate'
import * as firebase from 'firebase'

Vue.use(Vuex)

//  * If not building with SSR mode, you can
//  * directly export the Store instantiation
//  */
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    //     modules: {
    //       example
    //     }
    state: {},
    mutations: {},
    actions: {
      test ({ commit, getters }, payload) {
        console.log('action running')
        // put a user in 'users' collection to see it on console
        firebase.firestore().collection('users').limit(1).get()
          .then(user => {
            user.forEach(user => {
              console.log(user.data())
            })
          })
      }
    },
    getters: {}
  })

  return Store
}
