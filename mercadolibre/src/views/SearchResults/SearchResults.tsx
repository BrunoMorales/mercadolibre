import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { useParams, RouteProps } from 'react-router-dom'
import fetchItems, { result } from "../../utils/fetchItems";



const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState<result[] | undefined>(undefined)

    useEffect(() => {
        params && fetchItems(params)
            .then((res) =>
                setResults(res)
            )
    }, [params])


    useEffect(() => {
        console.log('res,', results)
    }, [results])

    return (
        <section className='search-results'>
            <div className='result-container'>
                {params}
            </div>
        </section>
    )
}

export default SearchResults