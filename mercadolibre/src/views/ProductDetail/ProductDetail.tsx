
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import './ProductDetail.scss'
import fetchProduct, { fetchProductDescription } from '../../utils/fetchProduct'

interface product {
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
}

const getProductCondition = (product: product | undefined) => {
    return product?.attributes.map((attribute: any) => {
        if (attribute.id === 'ITEM_CONDITION') return attribute.value_name
    })
}

const formatPrice = (value: number | undefined): string | undefined => {
    return value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}


const ProductDetail: FunctionComponent = (props: RouteProps): ReactElement => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState<product | undefined>(undefined)
    const [description, setDescription] = useState<string | undefined>('')

    useEffect(() => {
        productId &&
            fetchProduct(productId)
                .then(
                    (product) => setProduct(product)
                )
            &&
            fetchProductDescription(productId)
                .then(
                    (desc) => setDescription(desc)
                )

    }, [productId])


    return <section className='product-detail'>
        <div className='product-container'>
            <img src={product?.thumbnail} alt='imagen_producto' className='thumbnail' />
            <header className='product-header'>
                <div className=''>
                    <p className='product-condition'>
                        {getProductCondition(product)} - {product?.sold_quantity} vendidos
                    </p>
                    <h1 className='product-title'>
                        {product?.title}
                    </h1>
                    <p className='product-price'>
                        $ {formatPrice(product?.price)}
                    </p>
                    <button className='buy-btn'>
                        Comprar
                    </button>
                </div>
            </header>
            <p className='product-description'>
                {description}
            </p>
        </div>
    </section>
}

export default ProductDetail