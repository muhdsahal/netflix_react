import axios from 'axios'
import {baseUrl} from './constences/constences'

const instance = axios.create({
    baseURL: baseUrl
  });
  export default instance