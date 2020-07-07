import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA'
})

export default apiClient