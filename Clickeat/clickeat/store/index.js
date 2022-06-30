export const state = () => ({
  userEmail: "",
  userId: 0,
  role: 0,
  cart: []
})

export const mutations = {
  setCart(state, cart){
    state.cart = cart
  },
  addArticle(state, article) {
    state.cart.push(article)
  },
  removeArticle(state, index){
    state.cart.splice(index, 1)
  },
  setRole(state, role){
    state.role = role
  },
  setUserEmail(state, userEmail){
    state.userEmail = userEmail
  },
  setUserId(state, userId){
    state.userId = userId
  }
}

export const getters = {
  getCart(state) {
    return state.cart
  },
  getRole(state){
    return state.role;
  },
  getUserEmail(state){
    return state.userEmail
  },
  getUserId(state){
    return state.userId
  }
}