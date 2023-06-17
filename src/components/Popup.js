import React, { useContext, useEffect, useState } from 'react'
import { ShowModalContext } from '../Context';


function Popup() {
  const {setShowpup} = useContext(ShowModalContext);
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [opacity, setOpacity] = useState(0)

  useEffect(()=>{
    setTimeout(() => {
        setOpacity(1)
    }, 10);
  },[])

  const handleClose = () => {
    setShowpup(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Prenom : " + prenom, "\nEmail : " + email)
  }
  return (
    <div className='overlay' >
        <div className='popup' style={{opacity: opacity}}>
            <h1 className='title-modal'>Formulaire de contact</h1>
            <hr style={{color: 'white'}}></hr>
            <button className='close-button' onClick={()=>handleClose()}>X</button>
            <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                <input type='text' placeholder='Prénom' name="name" value={prenom} onChange={(e)=>setPrenom(e.target.value)} required></input><br/>
                <input type='email' placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input><br/>
                <button type='submit'>Valider</button>
            </form>
        </div>
    </div>
  )
}

export default Popup