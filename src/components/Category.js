import React from 'react'

const Category = ({category, filterCategory}) => {    
    
    return (
        <article className='category'>               
            <button className='button' onClick={() => filterCategory(category)}>
                {category}
            </button>       
        </article>
    )
}

export default Category