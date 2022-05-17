import React from 'react'
import { useGlobalContext } from '../context'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Reviews = () => {
  const {reviewsData, reviewIndex, setReviewIndex} = useGlobalContext()
  const {name, image, text} = reviewsData[reviewIndex]  

  const prevReview = () => {
    setReviewIndex( index => {
      if(index === 0) {
        return reviewsData.length - 1
      } else {
        return index - 1
      }
    })
  }
  const nextReview = () => {
    setReviewIndex( index => {
      if(index === reviewsData.length - 1) {
        return 0
      } else {
        return index + 1
      }
    })
  }

  return (
    <section className='reviews'>
      <FaChevronLeft
        className='arrow'
        onClick={prevReview}
      />
      <div className='review'>
        <div className='img-container'>
            <img src={image} alt={name} />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h3 className='name'>{name}</h3>
        <p>{text}</p>
      </div>
      <FaChevronRight
        className='arrow'
        onClick={nextReview}
      />
    </section>
  )
}

export default Reviews