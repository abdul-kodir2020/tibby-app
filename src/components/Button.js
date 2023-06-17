import React, { useContext, useEffect, useState } from 'react'
import cash from '../images/cash.jpg'
import star from '../images/star.jpg'
import { ShowModalContext } from '../Context';

function Button(props) {
  const {showPopup, setShowpup} = useContext(ShowModalContext);

  const handleClick = () =>{
    setShowpup(previous => !previous);
  }
  return (
    <>
      <button className='button' onClick={()=>handleClick()}>
        {(!props.img? null:
          (props.img == 'cash'? <img src={cash} alt='cash'></img>:
          <img src={star} alt='star'></img>
          )
        )}
      </button>
    </>
  )
}

export default Button