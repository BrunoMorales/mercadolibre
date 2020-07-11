import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { RouteProps } from 'react-router-dom'
import fetchResults from "../../utils/fetchResults";
import Result from "../../components/Result";
import { product, filter } from "../../utils/types";

const ELEMENTS_TO_SHOW: number = 4

const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState<product[] | undefined>(undefined)

    useEffect(() => {
        params ?
            fetchResults(params)
                .then((res) => {
                    setResults(res?.results)
                })
            :
            setResults([])
    }, [params])

    return (
        <section className='search-results'>
            <div className='result-container'>
                {results?.slice(0, ELEMENTS_TO_SHOW).map((result, index) =>
                    <Result data={result} key={index} />
                )}
            </div>
        </section>
    )
}

export default SearchResults