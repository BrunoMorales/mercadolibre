
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import fetchProduct, { fetchProductDescription } from '../../utils/fetchProduct'
import { formatPrice } from '../../utils/formatters'
import { product } from '../../utils/types'
import './ProductDetail.scss'


const getProductCondition = (product: product | undefined) => {
    //this could be done in back end
    return product?.attributes.map((attribute: any) => {
        if (attribute.id === 'ITEM_CONDITION') return attribute.value_name
    })
}

const ProductDetail: FunctionComponent = (props: RouteProps): ReactElement => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState<product | undefined>(undefined)
    const [description, setDescription] = useState<string | undefined>('')

    useEffect(() => {
        if (productId) {
            fetchProduct(productId)
                .then(
                    (product) => setProduct(product)
                )
            fetchProductDescription(productId)
                .then(
                    (desc) => setDescription(desc)
                )
        }
    }, [productId])


    return (
        <section className='product-detail'>
            <Breadcrumb categoryId={product?.category_id} />
            <div className='product-container'>
                <div className='product-header'>
                    <img src={product?.thumbnail} alt='imagen_producto' className='thumbnail' />
                    <div className='product-header-container'>
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
                </div>
                <p className='product-description'>
                    <h2>
                        Descripción del producto
                </h2>
                    {description}
                </p>
            </div>
        </section>
    )
}

export default ProductDetail