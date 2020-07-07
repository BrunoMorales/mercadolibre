import React, { FunctionComponent, ReactElement, useEffect } from "react";
import './SearchResults.scss'
import { useParams, RouteProps } from 'react-router-dom'
import fetchItems from "../../utils/fetchItems";


const SearchResults: FunctionComponent = (props: RouteProps): ReactElement => {
    console.log('params: ', props.location?.search)

    useEffect(() => {
        fetchItems('')
    }, [])

    return (
        <section className='search-results'>
            <div className='result-container'>
                holaa
            </div>
        </section>
    )
}

export default SearchResults