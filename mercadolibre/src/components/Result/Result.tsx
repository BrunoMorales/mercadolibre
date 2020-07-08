import React, { FunctionComponent, ReactElement } from "react";
import { result } from "../../utils/fetchItems"
import './Result.scss'

interface resultProps {
    data: result
}

const Result: FunctionComponent<resultProps> = ({ data }): ReactElement => {
    const {
        thumbnail,
        price,
        title,
        address: { state_name },
    } = data;

    return <div className='result'>
        <img src={thumbnail} alt='imagen_articulo' className='thumbnail' />
        <div>
            <p>
                {price}
            </p>
            <h2>
                {title}
            </h2>
        </div>
        <p>
            {state_name}
        </p>
    </div>
}

export default Result