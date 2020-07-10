
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import './ProductDetail.scss'
import fetchProduct, { fetchProductDescription } from '../../utils/fetchProduct'

interface product {
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
    descriptions: { id: string }[],
}

const ProductDetail: FunctionComponent = (props: RouteProps): ReactElement => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState<product | undefined>(undefined)
    const [description, setDescription] = useState<string | undefined>('')

    useEffect(() => {
        productId &&
            fetchProduct(productId)
                .then(
                    (product) => {
                        setProduct(product);
                        console.log(product)
                    }
                )
            &&
            fetchProductDescription(productId)
                .then(
                    (desc) => setDescription(desc)
                )

    }, [productId])


    return <section className='product-detail'>
        <div className='product-container'>
            <div>
                <img src={product?.thumbnail} alt='' className='thumbnail' />
                <div>
                    <p>
                        {product?.condition} - {product?.sold_quantity} vendidos
                    </p>
                    <h1>
                        {product?.title}
                    </h1>
                    <p>
                        {product?.price}
                    </p>
                    <button>
                        Comprar
                    </button>
                </div>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </section>
}

export default ProductDetail