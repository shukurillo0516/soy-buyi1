import store from "../store"
// import AUTHORIZATION from '../constants/constants'

const beforeEnter = (to, from, next) => {
  if (!store.getters.currentToken) {
    next('/login')
  } else {
    next()  
  }
}

export default beforeEnter;