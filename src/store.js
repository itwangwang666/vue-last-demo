import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let car = JSON.parse(localStorage.getItem('car') || '[]')

export default new Vuex.Store({
  state: {
    car
  },
  mutations: {
    addCar(state, goodsInfo){
      let index = state.car.findIndex(item=>{
        if(item.id === goodsInfo.id){
          return true
        }
        
      })
      //如果没找到
      if(index === -1){
        state.car.push(goodsInfo)
      }else{
        state.car[index].count += parseInt( goodsInfo.count)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  actions: {

  }
})
