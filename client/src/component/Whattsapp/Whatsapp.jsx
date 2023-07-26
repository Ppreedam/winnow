import React from 'react'
import style from "./Whatsapp.module.css"
import { FaWhatsappSquare } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className={style.container}>
        <a href='https://wa.me/917003424150' target='_blank'>
            <FaWhatsappSquare className={style.whatsapp_icon}/>
        </a>
    </div>
  )
}

export default Whatsapp