import React from 'react'
import Category from '../components/Category'
import Plate from '../components/Plate.js'
import { useGlobalContext } from '../context'

const Plates = () => {
  const {plates, categories, filterCategory} = useGlobalContext()   

    return (
        <main>
            <section className="categories">
                {categories.map((category, index) => {
                    return <Category key={index} category={category} filterCategory={filterCategory} />
                })}        
            </section>

            <section className="plates">
                {plates.map(plate => {
                    return <Plate key={plate.id} {...plate} />
                })}        
            </section>
        </main>
    )
}

export default Plates