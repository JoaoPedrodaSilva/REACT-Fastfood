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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isSidebarOpened, setIsSidebarOpened] = useState(false)

    //declaring functions
    const filterCategory = (category) => {
        if(category === 'all') {
            setPlates(platesData)
        } else {
            setPlates(platesData.filter(item => item.category === category))
        }
    }
    const openModal = () => {
        setIsModalOpened(true)
    }
    const closeModal = () => {
        setIsModalOpened(false)
    }
    const openSidebar = () => {
        setIsSidebarOpened(true)  
    }
    const closeSidebar = () => {
        setIsSidebarOpened(false)
    }    

    //rendering
    return (
        <AppContext.Provider
            value={{
                platesData, reviewsData,
                plates, setPlates,
                categories, filterCategory,
                readMore, setReadMore,
                reviewIndex, setReviewIndex,
                name, setName, email, setEmail, message, setMessage,
                isModalOpened, openModal, closeModal,
                isSidebarOpened, openSidebar, closeSidebar
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}