import React, { FunctionComponent, ReactElement } from "react";
import './Result.scss'
import { Link } from "react-router-dom";
import { item } from "../../utils/types";
import { formatPrice } from "../../utils/formatters";

interface resultProps {
    data: item
}

const Result: FunctionComponent<resultProps> = ({ data }): ReactElement => {
    const {
        id,
        picture,
        price,
        title,
        address,
        free_shipping
    } = data;
    return (
        <Link className='result' to={{ pathname: `/items/${id}`, state: { product: data } }}>
            <img src={picture} alt='imagen_articulo' className='thumbnail' />
            <div className='result-content'>
                <div className='result-header'>
                    <p className='result-price'>
                        $ {formatPrice(price.amount)} {free_shipping && <span className='free-shipping' />}
                    </p>
                    <h2 className='result-title'>
                        {title}
                    </h2>
                </div>
                <p className='result-location'>
                    {address}
                </p>
            </div>
        </Link>
    )
}

export default Result