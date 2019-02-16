// import something here
import * as firebase from 'firebase'
// leave the export, even if you don't use it
// Use your configuration info
firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
})

export default async ({ store, app, router, Vue }) => {
  // something to do
  console.log('firebase running', firebase)
  // someone used this line, but i commented as i didn't see any effect.
  // Vue.prototype.$firebase = firebase
}
export { firebase }
