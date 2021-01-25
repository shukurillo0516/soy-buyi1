// import store from "../store"

const beforeEnter = (to, from, next) => {
  if (!localStorage.getItem('token')) {
    next('/login')
  } else {
    next()  
  }
}
0
export default beforeEnter;