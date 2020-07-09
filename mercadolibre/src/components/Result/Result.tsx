import React, { FunctionComponent, ReactElement } from "react";
import { result } from "../../utils/fetchItems"
import './Result.scss'
import { Link } from "react-router-dom";

interface resultProps {
    data: result
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
        <Link className='result' to={`/items/${id}`}>
            <img src={thumbnail} alt='imagen_articulo' className='thumbnail' />
            <div>
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
        </Link>
    )
}

export default Result