import React, { FunctionComponent, ReactElement } from "react";
import './Result.scss'
import { Link } from "react-router-dom";
import { product } from "../../utils/types";
import { formatPrice } from "../../utils/formatters";

interface resultProps {
    data: product
}

const Result: FunctionComponent<resultProps> = ({ data }): ReactElement => {
    const {
        id,
        thumbnail,
        price,
        title,
        address: { state_name },
        shipping: { free_shipping }
    } = data;
    console.log(data.title, data.shipping.free_shipping)

    return (
        <Link className='result' to={{ pathname: `/items/${id}`, state: { product: data } }}>
            <img src={thumbnail} alt='imagen_articulo' className='thumbnail' />
            <div className='result-content'>
                <div className='result-header'>
                    <p className='result-price'>
                        $ {formatPrice(Math.floor(price))} {free_shipping && <span className='free-shipping' />}
                    </p>
                    <h2 className='result-title'>
                        {title}
                    </h2>
                </div>
                <p className='result-location'>
                    {state_name}
                </p>
            </div>
        </Link>
    )
}

export default Result