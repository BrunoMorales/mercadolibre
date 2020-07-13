import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { RouteProps } from 'react-router-dom'
import fetchResults from "../../utils/fetchResults";
import Result from "../../components/Result";
import { searchResult } from "../../utils/types";
import Breadcrumb from "../../components/Breadcrumb";

const ELEMENTS_TO_SHOW: number = 4

const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState<searchResult | undefined>(undefined)

    useEffect(() => {
        params ?
            fetchResults(params)
                .then((res) => {
                    setResults(res)
                })
            :
            setResults(undefined)
    }, [params])

    return (
        <section className='search-results'>
            <Breadcrumb categoryId={results?.category_id} />
            <div className='result-container'>
                {results?.items.slice(0, ELEMENTS_TO_SHOW).map((result, index) =>
                    <Result data={result} key={index} />
                )}
            </div>
        </section>
    )
}

export default SearchResults