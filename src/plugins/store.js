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
    LOGOUT (state){
      state.token = null
      state.user = null
      localStorage.setItem('auth-user', '')
      localStorage.setItem('auth-token', '')
    },
    INIT_STATE (state){
      if(state.token){
        state.token = localStorage.getItem('auth-token')
        state.user = localStorage.getItem('auth-user') ? JSON.parse(localStorage.getItem('auth-user')) : localStorage.getItem('auth-user')
        api.defaults.headers.Authorization = `Bearer ${state.token}`
      }
    }
  },
  actions: {
    login({commit, dispatch}, data){
      return new Promise((resolve, reject)=>{

        api.post('auth/jwt/create', data).then((res)=> {
          commit('SET_TOKEN', res.data.access)
          dispatch('me').then((res1)=>{
            resolve(res1)
          })

        }).catch((err)=> {
          reject(err)
        })
      })
    },
    me({commit}){
      return new Promise((resolve, reject)=> {

        api.get('auth/users/me/').then((res)=>{
          commit('SET_USER', res.data)
          resolve(res.data)
        }).catch((err)=> {
          reject(err)
        })
      })
    },
    logout({commit}){
      commit('LOGOUT')
    },
    register(_, user){
      return api.post('auth/users/', user)
    }
  }
})
