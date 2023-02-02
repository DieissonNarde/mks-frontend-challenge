import axios from 'axios'

const URL = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1'

const api = axios.create({ baseURL: URL })

export default api
