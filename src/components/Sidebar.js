import React from 'react'
import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'

const Sidebar = () => {
    const {isSidebarOpened, closeSidebar} = useGlobalContext()

    return (
        <aside className={`${isSidebarOpened ? 'sidebar' : 'sidebar-hidden'}`}>
            <button onClick={closeSidebar}>
                <FaTimes />
            </button>
            <p>You will also find functionalities like sidebars, modals, filters, forms, links, accordions, conditional renderings and navbars!</p>
            <p>And it's all completely responsive</p>
            <p>That's INSANE!!!</p>
        </aside>
    )
}

export default Sidebar