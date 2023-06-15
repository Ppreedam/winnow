import React from 'react'
import style from "./Account.module.css"

const Account = () => {
    return (
        <>
            <div className={style.mainbox}>
                <div style={{ width: "100%", height: "50px", border: "1px solid red", textAlign: "center" }}>
                    <h1>Navbar</h1>
                </div>
            </div>
        </>
    )
}

export default Account