import React from 'react'
import CollapsibleExample from '../Navbar/Navbar'
import style from './comingsoon.module.css'

const Comingsoon = () => {
  return (
    <>
    <CollapsibleExample/>
    <div className={style.comingsoon_mainbox}>
        <div >
            <img style={{height:"100%",width:"100%"}} src="coming soon gif.gif" alt="coming_soon" />
        </div>
    </div>
    </>
  )
}

export default Comingsoon