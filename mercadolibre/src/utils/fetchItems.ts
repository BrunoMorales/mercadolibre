import apiClient from './apiClient'

const fetchItems = async (searchInput: string) => {
    try {
        const response = await apiClient.get('/search', {
            params: {
                q: searchInput
            }
        })
        console.log(response.data)
    } catch (error) {
        console.error('Error while searching items in server', error)
    }
}

export default fetchItems