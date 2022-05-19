import React, {useRef} from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
  const nameRef = useRef()
  const emailRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  
  return (
    <section className='contact'>
      <h1>Contact us</h1>

      <div className='contact-division'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='name-label'>Name: </label>
          <input
            ref={nameRef}
            type="text"
            id='name'
            placeholder='Your name here'
            className='name-input'
          />

          <label htmlFor="email" className='email-label'>E-mail: </label>
          <input
            ref={emailRef}
            type="email"
            id='email'
            placeholder='Your e-mail here'
            className='email-input'
          />

          <label htmlFor="message">Message:</label>
          <textarea id="message" cols="30" rows="7" placeholder='Your message here'/>

          <button type='submit'>Submit</button>
        </form>

        <article className='contact-info'>

          <div className='contact-address'>
            <FaMapMarkerAlt className='contact-icon' />
            <div>
              <h4>Fast Food Project</h4>
              <p>Somewhere, CA</p>
            </div>
          </div>

          <div className='contact-phone'>
            <FaPhoneAlt className='contact-icon' />
            <h4>(555)555-5555</h4>            
          </div>

          <div className='contact-email'>
            <FaMailBulk className='contact-icon' />
            <h4>fastfood@project.com</h4>            
          </div>

        </article>
      </div>
    </section>
  )
}

export default Contact