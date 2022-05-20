import React from 'react'
import Form from '../components/Form.js'
import ContactInfo from '../components/ContactInfo.js'
import Modal from '../components/Modal.js'


const Contact = () => {
  
  return (
    <section className='contact'>
      <h1>Contact us</h1>
      <div className='contact-division'>
        <Form />
        <ContactInfo />
      </div>
      <Modal />
    </section>
  )
}

export default Contact