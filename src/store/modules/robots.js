import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
    foo(state) {
      return `robots-getter ${state.foo}`;
    },
  },
  actions: {
    getParts(context) {
      axios.get('/api/parts').then((response) => {
        context.commit('updateParts', response.data);
      }).catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot));
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
};
