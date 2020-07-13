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


export interface searchResult {
    author: {
        name: string,
        lastname: string,
    },
    category_id: string,
    items: item[]
}

export interface item {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
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