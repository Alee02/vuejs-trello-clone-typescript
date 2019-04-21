import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'

Vue.use(Vuex)

let storedBoard: any = localStorage.getItem('board')
const board = JSON.parse(storedBoard) || defaultBoard

export default new Vuex.Store({
  state: {
    board
  },
  mutations: {}
})
