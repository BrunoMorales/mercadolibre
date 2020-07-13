export interface product {
    attributes: {
        id: string,
        value_name: string
    }[],
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
    shipping: { free_shipping: boolean },
}

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


export interface filter {
    id: string,
    values: {
        id: string,
        name: string,
        path_from_root: {
            id: string,
            name: string
        }[]
    }[]
}

export interface available_filter {
    id: string,
    name: string,
    type: string,
    values: {
        id: string,
        name: string,
        results: number,
    }[]
}

export interface category {
    id: string,
    name: string,
    results?: number,
}