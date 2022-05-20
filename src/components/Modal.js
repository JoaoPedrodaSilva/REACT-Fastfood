import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'

const Modal = () => {
    const {name, email, message, isModalOpened, closeModal} = useGlobalContext()

    useEffect(() => {
    const timer = setTimeout(() => {
      closeModal()
    }, 8000)
    return () => clearTimeout(timer)
  }, [isModalOpened])

    return (
        <div className={`${isModalOpened ? 'modal' : 'modal-hidden'}`}>
            <button onClick={closeModal}>
                <FaTimes />
            </button>
            {
                name === '' ? <h4>Please, tell us your name.</h4> :
                email === '' ? <h4>Please, share your e-mail with us.</h4> :
                message === '' ? <h4>Please, send us a message.</h4> :
                <h4 style={{color: "green"}}> Hello {name}, if this was a real website, we would answer you at {email}.<br /> But thanks anyway!</h4>
            }
        </div>
    )
}

export default Modal