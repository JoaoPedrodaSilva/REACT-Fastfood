import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useGlobalContext } from '../context'

const PlateDetails = () => {
  const {id} = useParams()
  const {plates, readMore, setReadMore} = useGlobalContext()
  const {title, imgdetails, price, fulldesc} = plates.filter(plate => plate.id == id)[0]
  
  return (
    <section className='plate-details'>
      <h1 className='title'>{title}</h1>
      <h1 className='price'>{price}</h1>
      <img src={imgdetails} alt={fulldesc} />
      <p>
        {readMore ? fulldesc : `${fulldesc.substring(0, 100)}`}
        <button onClick={() => setReadMore(!readMore)} className='read-more'>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <Link to='/plates' className='button'>
        Back to Plates
      </Link>
    </section>
  )
}

export default PlateDetails