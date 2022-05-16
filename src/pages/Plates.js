import React from 'react'
import Category from '../components/Category'
import Item from '../components/Item'
import { useGlobalContext } from '../context'

const Plates = () => {
  const {menu, categories, filterCategory} = useGlobalContext()   

    return (
        <main>
            <section className="categories">
                {categories.map((category, index) => {
                    return <Category key={index} category={category} filterCategory={filterCategory} />
                })}        
            </section>

            <section className="menu">
                {menu.map(item => {
                    return <Item key={item.id} {...item} />
                })}        
            </section>
        </main>
    )
}

export default Plates