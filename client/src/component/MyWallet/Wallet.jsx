import React from 'react'
import style from "./wallet.module.css"
import CollapsibleExample from '../Navbar/Navbar'


const Wallet = () => {

    return (
        <>
            <div className={style.mainbox}>
                <div style={{ width: "100%", height: "50px" }}>
                    <CollapsibleExample/>
                </div>
                {/* secondbox start*/}
                <div className={style.secondbox}>
                    <p className={style.myportfolio_text_deco} style={{ fontSize: "35px" }}>My Wallet</p>
                    <div style={{ display: "flex", gap: "10px", paddingBottom: "80px" }}>
                        <div className={style.current_value_box}>
                            <div><p>Available Balance <br /> <span><b style={{ color: '#170F49' }}>₹ 30,000</b> </span></p></div>
                            
                        </div>

                        {/* <div className={style.invested_value_box}>
                            <div><p>Invested Value <br /> <span><b style={{ color: '#170F49' }}>₹ 3,55,150</b> </span></p></div>
                        </div> */}
                    </div>
                    {/* My Asset box start */}
                    <div className={style.my_asset_mainbox}>
                        <div className={style.my_asset_mainbox_firstbox}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Recent Transections</p>
                                <p>Overall  </p>
                            </div>
                            <div className={style.company_box}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <div className={style.circle_box}><p>A</p></div>
                                    <div><p><b>Deposit </b><br /> <span style={{ color: "#a4d1ef" }}>January 5,2023</span></p></div>
                                </div>
                                <div>
                                    <p style={{ color: "green", marginTop: "20px" }}>₹10,000</p>
                                </div>
                            </div>
                            {/* 2nd box */}
                            <div className={style.company_box}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <div className={style.circle_box}><p>A</p></div>
                                    <div><p><b>Deposit </b><br /> <span style={{ color: "#a4d1ef" }}>January 15,2023</span></p></div>
                                </div>
                                <div>
                                    <p style={{ color: "green", marginTop: "20px" }}>₹17,000</p>
                                </div>
                            </div>
                            {/* 3rd box */}
                            <div className={style.company_box}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <div className={style.circle_box}><p>A</p></div>
                                    <div><p><b>Withdrawal</b><br /> <span style={{ color: "#a4d1ef" }}>January 20,2023</span></p></div>
                                </div>
                                <div>
                                    <p style={{ color: "red", marginTop: "20px" }}>₹12,000</p>
                                </div>
                            </div>
                            {/* 4th box */}
                            <div className={style.company_box}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <div className={style.circle_box}><p>A</p></div>
                                    <div><p><b>Company A </b><br /> <span style={{ color: "#a4d1ef" }}>January 25,2023</span></p></div>
                                </div>
                                <div>
                                    <p style={{ color: "green", marginTop: "20px" }}>₹75,00</p>
                                </div>
                            </div>
                            {/* 5th box */}
                            <div className={style.company_box}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <div className={style.circle_box}><p>A</p></div>
                                    <div><p><b>Company A </b><br /> <span style={{ color: "#a4d1ef" }}>January 29,2023</span></p></div>
                                </div>
                                <div>
                                    <p style={{ color: "green", marginTop: "20px" }}>₹75,00</p>
                                </div>
                            </div>
                            {/* Pia chart */}
                            <div>

                            </div>
                        </div>
                        {/* pia chart part */}
                        {/* <div className={style.piachart}>
                            <p>Efficiency</p>
                            <div className={style.piachartbox}></div>
                        </div> */}
                    </div>
                </div>
                {/* secondbox end*/}
            </div>
        </>
    )
}

export default Wallet