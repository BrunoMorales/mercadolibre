import apiClient from './apiClient'
import { productResponse } from './types'

export const fetchProduct = async (productId: string): Promise<productResponse | undefined> => {
    try {
        const response = await apiClient.get(`/api/items/${productId}`)
        console.log(response.data)
        return (response.data)
    } catch (error) {
        console.error('Error while searching product in server. ', error)
    }
}

export default fetchProduct