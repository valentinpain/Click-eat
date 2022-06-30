export const state = () => ({
  role: 1,
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
  }
}

export const getters = {
  getCart(state) {
    return state.cart
  }
}