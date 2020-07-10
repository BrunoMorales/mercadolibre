import apiClient from './apiClient'

export interface product {
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    condition: string,
    sold_quantity: number,
    address: {
        state_name: string,
        city_name: string,
    },
    category_id: string,
    descriptions: { id: string }[],
}

const fetchItems = async (searchInput: string): Promise<product[] | undefined> => {
    try {
        const response = await apiClient.get('/sites/MLA/search', {
            params: {
                q: searchInput
            }
        })
        return (response.data.results)
    } catch (error) {
        console.error('Error while searching items in server', error)
    }
}

export default fetchItems