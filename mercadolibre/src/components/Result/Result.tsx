import React, { FunctionComponent, ReactElement } from "react";
import './Result.scss'
import { Link } from "react-router-dom";
import { product } from "../../utils/types";

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
    } = data;

    return (
        <Link className='result' to={{ pathname: `/items/${id}`, state: { product: data } }}>
            <img src={thumbnail} alt='imagen_articulo' className='thumbnail' />
            <div className='result-content'>
                <div className='result-header'>
                    <p className='result-price'>
                        $ {Math.floor(price)}
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