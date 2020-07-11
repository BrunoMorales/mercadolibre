import apiClient from "./apiClient"
import { category } from "./types"

const fetchCategoryPath = async (categoryId: string | undefined): Promise<category[] | undefined> => {
    try {
        const response = await apiClient.get(`/categories/${categoryId}`)
        return response.data.path_from_root
    } catch (error) {
        console.log('Error while fetching product category. ', error)
    }
}

export default fetchCategoryPath