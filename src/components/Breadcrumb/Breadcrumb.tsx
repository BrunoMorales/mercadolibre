import React, { ReactElement, FunctionComponent, useState, useEffect } from 'react'
import fetchCategoryPath from '../../utils/fetchCategory'
import './Breadcrumb.scss'
import { category } from '../../utils/types'
import { Link } from 'react-router-dom'

interface breadcrumbProps {
    categoryId: string | undefined
}

const Breadcrumb: FunctionComponent<breadcrumbProps> = ({ categoryId }): ReactElement => {
    const [breadcrumb, setBreadcrumb] = useState<category[] | undefined>(undefined)
    useEffect(() => {
        categoryId &&
            fetchCategoryPath(categoryId).then((path) =>
                setBreadcrumb(path)
            )
    }, [categoryId])

    return (
        <nav className='breadcrumb'>
            {
                breadcrumb?.map((category, index) => (
                    <>
                        {index > 0 && <i className='material-icons'>chevron_right</i>}
                        <Link to={`/items?search=${category.name}`} className='breadcrumb-link'>

                            {category.name}

                        </Link>
                    </>
                ))
            }
        </nav>
    )
}

export default Breadcrumb