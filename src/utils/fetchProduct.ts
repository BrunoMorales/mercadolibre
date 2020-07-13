import apiClient from './apiClient'
import { product } from './types'

export const fetchProduct = async (productId: string): Promise<product | undefined> => {
    try {
        const response = await apiClient.get(`/items/${productId}`)
        return (response.data)
    } catch (error) {
        console.error('Error while searching product in server. ', error)
    }
}

export const fetchProductDescription = async (productId: string): Promise<string | undefined> => {
    try {
        const response = await apiClient.get(`/items/${productId}/description`)
        return (response.data.plain_text)
    } catch (error) {
        console.error('Error while searching item description in server. ', error)
    }
}

export default fetchProduct