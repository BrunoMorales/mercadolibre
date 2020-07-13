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
    available_filters: available_filter[]
    results: product[]
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