import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export const Rating = ({color , text , value}) => {
  return (
    
         <div className='rating'>
        <span>
            <i style={{color}}
            className={
                        value >= 1.0
                        ?'fas fa-star'
                        : value >= 0.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                        }></i>
         </span>
         <span>
            <i style={{color}}
            className={
                        value >= 2.0
                        ?'fas fa-star'
                        : value >= 1.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                        }></i>
         </span>
         <span>
            <i style={{color}}
            className={ 
                        value >= 3.0
                        ?'fas fa-star'
                        : value >= 2.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                        }></i>
         </span>
         <span>
            <i style={{color}}
            className={
                        value >= 4.0
                        ?'fas fa-star'
                        : value >= 3.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                        }></i>
         </span>
         <span>
            <i style={{color}}
            className={
                        value >= 5.0
                        ?'fas fa-star'
                        : value >= 4.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                        }></i>
         </span>
         <span>{text && text}</span>
    </div>
    
  )
}
Rating.defaultProps = {
   color : '#f8e825',

}


export default Rating
