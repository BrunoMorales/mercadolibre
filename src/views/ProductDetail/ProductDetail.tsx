
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import fetchProduct from '../../utils/fetchProduct'
import { formatPrice } from '../../utils/formatters'
import { productItem } from '../../utils/types'
import './ProductDetail.scss'

const ProductDetail: FunctionComponent = (props: RouteProps): ReactElement => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState<productItem | undefined>(undefined)

    useEffect(() => {
        productId &&
            fetchProduct(productId)
                .then(
                    (product) => setProduct(product?.item)
                )
    }, [productId])


    return (
        <section className='product-detail'>
            <Breadcrumb categoryId={product?.category} />
            <div className='product-container'>
                <div className='product-header'>
                    <img src={product?.picture} alt='imagen_producto' className='thumbnail' />
                    <div className='product-header-container'>
                        <p className='product-condition'>
                            {product?.condition} - {product?.sold_quantity} vendidos
                    </p>
                        <h1 className='product-title'>
                            {product?.title}
                        </h1>
                        <p className='product-price'>
                            $ {formatPrice(product?.price?.amount)}
                        </p>
                        <button className='buy-btn'>
                            Comprar
                    </button>
                    </div>
                </div>
                <div className='product-description'>
                    <h2>
                        Descripción del producto
                </h2>
                    <p >
                        {product?.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail