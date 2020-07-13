interface author {
    name: string,
    lastname: string,
}

interface item {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean
}

export interface searchResult {
    author: author,
    category_id: string,
    items: resultItem[]
}

export interface productResponse {
    author: author,
    item: productItem
}

export interface productItem extends item {
    sold_quantity: number,
    description: string,
    category: string
}

export interface resultItem extends item {
    address: string
}

export interface category {
    id: string,
    name: string,
    results?: number,
}