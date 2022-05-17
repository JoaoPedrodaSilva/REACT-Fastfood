import React, {useState, useContext} from "react"
import {platesData, reviewsData} from './data.js'

const AppContext = React.createContext()

//creating the unique categories, based on the data    
const uniqueCategories = ['all', ...new Set(platesData.map(item => item.category))]

const AppProvider = ({children}) => {
    //declaring global states
    const [plates, setPlates] = useState(platesData)
    const [categories, _] = useState([...uniqueCategories])
    const [readMore, setReadMore] = useState(true)
    const [reviewIndex, setReviewIndex] = useState(0)

    //declaring functions
    const filterCategory = (category) => {
        if(category === 'all') {
            setPlates(platesData)
        } else {
            setPlates(platesData.filter(item => item.category === category))
        }
    }

    //rendering
    return (
        <AppContext.Provider
            value={{
                platesData, reviewsData,
                plates, setPlates,
                categories, filterCategory,
                readMore, setReadMore,
                reviewIndex, setReviewIndex
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}