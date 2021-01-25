// import store from "../store"
import AUTHORIZATION from '../constants/constants'

const beforeEnter = (to, from, next) => {
  if (!localStorage.getItem(AUTHORIZATION)) {
    next('/login')
  } else {
    next()  
  }
}
0
export default beforeEnter;