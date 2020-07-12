import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import './SearchResults.scss'
import { RouteProps } from 'react-router-dom'
import fetchResults from "../../utils/fetchResults";
import Result from "../../components/Result";
import { category, available_filter, searchResult } from "../../utils/types";
import Breadcrumb from "../../components/Categories";

const ELEMENTS_TO_SHOW: number = 4

const getCategoryWithMostResults = (available_filters: available_filter[] | undefined): string => {
    //This should be done in back end
    let finalCategory: category = { id: '', name: '', results: 0 };
    available_filters?.map((available_filter) => {
        if (available_filter.id === 'category') {
            available_filter.values.map((category) => {
                if (category.results > (finalCategory.results || 0)) { finalCategory = category }
                return
            })
        }
        return;
    })
    return finalCategory.id
}

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
            <Breadcrumb categoryId={getCategoryWithMostResults(results?.available_filters)} />
            <div className='result-container'>
                {results?.results.slice(0, ELEMENTS_TO_SHOW).map((result, index) =>
                    <Result data={result} key={index} />
                )}
            </div>
        </section>
    )
}

export default SearchResults