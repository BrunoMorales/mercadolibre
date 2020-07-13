import apiClient from "./apiClient"
import { category } from "./types"

const fetchCategoryPath = async (categoryId: string | undefined): Promise<category[] | undefined> => {
    try {
        const response = await apiClient.get(`/api/category/${categoryId}`)
        return response.data.path_from_root
    } catch (error) {
        console.info('Error while fetching product category. ', error)
    }
}

export default fetchCategoryPath