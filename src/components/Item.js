import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, price, img, desc}) => {    
    
    return (
        <article className='item'>
            
            <div className='title-and-price'>
                <div className='title'>
                    <h1>{title}</h1>
                </div>
                <div className='price'>
                    <h1>{price}</h1>
                </div>
                
            </div>
            <div className='info'>
                <img src={img} alt={title} />
                <div className='description-and-button'>
                    <p className='description'>{desc}</p>
                    <Link to={`details/${id}`} className='button'>
                        Details
                    </Link>
                </div>
            </div>
        </article>
    )   
}

export default Item