import React from 'react'
import Sidebar from '../components/Sidebar'
import {FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk, FaArrowAltCircleLeft} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Home = () => {   
    const {openSidebar} = useGlobalContext()
    
    return (
        <section className='home'>
            <div className='home--main-div'>
                <h3 className='home--title'>Fastfood React Project</h3>
                <p>In this project you will find useState, useEffect, useContext, React Router and  much more...</p>
                <p>Check the animated arrow to know everything!</p>
                
                
                <div className='social-icons'>
                    <a href="https://wa.me/5513997250599" target='_blank'><FaWhatsapp /></a>
                    <a href="https://www.linkedin.com/in/joão-pedro-da-silva-7247291b0" target='_blank'><FaLinkedin /></a>
                    <a href="https://github.com/JoaoPedrodaSilva" target='_blank'><FaGithub /></a>
                    <a href="mailto:joao.pedro.da.silva@hotmail.com" target='_blank'><FaMailBulk /></a>
                </div>
            </div>
            <FaArrowAltCircleLeft 
                className='sidebar-arrow'
                onClick={openSidebar}
            />
            <Sidebar />
        </section>
    )
}

export default Home