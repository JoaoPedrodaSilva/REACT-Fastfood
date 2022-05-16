import React, {useState, useContext} from "react"
import data from './data.js'

const AppContext = React.createContext()

//creating the unique categories, based on the data    
const uniqueCategories = ['all', ...new Set(data.map(item => item.category))]

const AppProvider = ({children}) => {
    //declaring global states
    const [menu, setMenu] = useState(data)
    const [categories, _] = useState([...uniqueCategories])
    
    //declaring functions
    const filterCategory = (category) => {
        if(category === 'all') {
            setMenu(data)
        } else {
            setMenu(data.filter(item => item.category === category))
        }
    }

    //rendering
    return (
        <AppContext.Provider
            value={{
                menu, setMenu,
                categories, filterCategory
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}