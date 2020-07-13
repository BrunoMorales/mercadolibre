import apiClient from './apiClient'
import { searchResult } from './types'

const fetchResults = async (searchInput: string): Promise<searchResult | undefined> => {
    try {
        const response = await apiClient.get(`/api/items?q=${searchInput}`)
        return (response.data)
    } catch (error) {
        console.error('Error while searching items in server', error)
    }
}

export default fetchResults