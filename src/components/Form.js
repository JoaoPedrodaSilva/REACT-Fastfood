import React from 'react'
import { useGlobalContext } from '../context'

const Form = () => {
    const {name, setName, email, setEmail, message, setMessage, openModal, closeModal} = useGlobalContext()

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='name-label'>Name: </label>
            <input
                className='name-input'
                type="text"
                id='name'
                value={name}
                placeholder='Your name here'
                maxlength={20}
                onChange={event => {
                    setName(event.target.value)
                    closeModal()
                }}
            />

            <label htmlFor="email" className='email-label'>E-mail: </label>
            <input
                className='email-input'
                type="text"
                id='email'
                value={email}
                placeholder='Your e-mail here'
                maxlength={20}
                onChange={event => {
                    setEmail(event.target.value)
                    closeModal()
                }}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                cols="30"
                rows="7"
                value={message}
                onChange={event => {
                    setMessage(event.target.value)
                    closeModal()
                }}
                placeholder='Your message here'
            />

            <button
                type='submit'
                onClick={openModal}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
