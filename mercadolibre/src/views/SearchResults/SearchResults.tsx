import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { useParams, RouteProps } from 'react-router-dom'
import fetchItems from "../../utils/fetchItems";

interface result {
    id: string,
    address: {
        state_name: string,
        city_name: string,
    },
    title: string,
    sold_quantity: number,
    price: number,
    condition: string,
    category_id: string,

}

const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState()

    useEffect(() => {
        params && fetchItems(params)
            .then((res) =>
                console.log(res)
            )
    }, [params])

    return (
        <section className='search-results'>
            <div className='result-container'>
                {params}
            </div>
        </section>
    )
}

export default SearchResults