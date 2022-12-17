import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://auth.v2202107122785158474.goodsrv.de/'
})
