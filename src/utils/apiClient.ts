import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.mercadolibre.com'
})

export default apiClient