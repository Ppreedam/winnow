import React from 'react'
import CollapsibleExample from '../Navbar/Navbar'
import style from './comingsoon.module.css'
import coming from "./coming.png"

const Comingsoon = () => {
  return (
    <>
    <CollapsibleExample/>
    <div className={style.comingsoon_mainbox}>
        <div >
        
            <img style={{height:"100%",width:"100%"}} src={coming} alt="coming_soon" />
        </div>
    </div>
    </>
  )
}

export default Comingsoon