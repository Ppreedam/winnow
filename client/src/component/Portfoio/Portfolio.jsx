import React from 'react'
import style from "./portfolio.module.css"

const Portfolio = () => {
    return (
        <>
            <div className={style.mainbox}>
                <div style={{ width: "100%", height: "50px", border: "1px solid red", textAlign: "center" }}>
                    <h1>Portfolio</h1>
                </div>
            </div>
        </>
    )
}

export default Portfolio