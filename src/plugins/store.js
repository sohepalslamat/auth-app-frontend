import {createStore} from 'vuex'
import { api } from './axios'

export const store = createStore({
  state () {
    return {
      token: null,
      user: null
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      localStorage.setItem('auth-token', token)
      api.defaults.headers.Authorization = `Bearer ${token}`
    },
    SET_USER (state, user){
      state.user = user
      localStorage.setItem('auth-user', JSON.stringify(user))
    },
    INIT_STATE (state){
      state.token = localStorage.getItem('auth-token')
      state.user = JSON.parse(localStorage.getItem('auth-user'))
      api.defaults.headers.Authorization = `Bearer ${state.token}`
    }
  },
  actions: {
    login({commit, dispatch}, data){
      api.post('auth/jwt/create', data).then((res)=> {
        commit('SET_TOKEN', res.data.access)
        dispatch('me')

      })
    },
    me({commit}){
      api.get('auth/users/me').then((res)=>{
        commit('SET_USER', res.data)
      })
    }
  }
})
