import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'

const ContactInfo = () => {
  return (
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
  )
}

export default ContactInfo