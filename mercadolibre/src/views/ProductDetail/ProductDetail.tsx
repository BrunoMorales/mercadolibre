
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import { product } from '../../utils/fetchItems'
import fetchProduct from '../../utils/fetchProduct'

const ProductDetail: FunctionComponent = (props: RouteProps): ReactElement => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState<product | undefined>(undefined)

    useEffect(() => {
        productId && fetchProduct(productId)
    }, [])

    return <section>
        <img src='' alt='' className='' />
    </section>
}

export default ProductDetail