import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,
  params :{
    api_key: 'Rhclmb7Zk3G3MdrH3TDHyVxvkYe4gylDj9dhW7eO'
  }
})
