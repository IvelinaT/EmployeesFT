import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/'
})

export default instance
