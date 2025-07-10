import { useState } from 'react'
import './Sky.css'
import {Link} from 'react-scroll'

function Sky() {

    return (
        <div className='SkyContainer'>
            <p>Sky Container</p>
            <button onClick={() =>{window.scrollTo({
  top: 100000,
  left: 100,
  behavior: "smooth",
});}}>To Cave</button>
        </div>
    )
}

export default Sky