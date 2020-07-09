import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { RouteProps } from 'react-router-dom'
import fetchItems, { product } from "../../utils/fetchItems";
import Result from "../../components/Result";

const ELEMENTS_TO_SHOW: number = 4


const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState<product[] | undefined>(undefined)

    useEffect(() => {
        params ?
            fetchItems(params)
                .then((res) =>
                    setResults(res)
                )
            :
            setResults([])
    }, [params])

    return (
        <section className='search-results'>
            <div className='result-container'>
                {results?.slice(0, ELEMENTS_TO_SHOW).map((result) =>
                    <Result data={result} />
                )}
            </div>
        </section>
    )
}

export default SearchResults