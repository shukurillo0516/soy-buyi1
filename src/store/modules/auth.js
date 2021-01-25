import {auth, AUTHORIZATION} from "../../constants/constants"

const state = {
  user: null,
  currentToken: localStorage.getItem(AUTHORIZATION)
};

const mutations = {

};

const actions = {
  logIn({state}, param) {
    console.log(state.user)
    auth.signInWithEmailAndPassword(param.email, param.password)
    .then(cred => {
      console.log(cred)
      localStorage.setItem(AUTHORIZATION, cred.user.uid);
    }).catch(err => {console.log(err)})
  }
};

const getters = {
  currentToken: (state) => {
    return state.currentToken
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
