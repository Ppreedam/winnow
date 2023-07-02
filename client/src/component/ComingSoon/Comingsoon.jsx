import React from 'react'
import CollapsibleExample from '../Navbar/Navbar'
import style from './comingsoon.module.css'

const Comingsoon = () => {
  return (
    <>
    <CollapsibleExample/>
    <div className={style.comingsoon_mainbox}>
        <div >
            <img style={{height:"100%",width:"100%"}} src="https://static.wixstatic.com/media/6d62b3_bbaeb44fc6b04ead8a943ca65cbfe375~mv2.gif" alt="coming_soon" />
        </div>
    </div>
    </>
  )
}

export default Comingsoon