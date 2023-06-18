import React from 'react'
import style from "./Account.module.css"

const Account = () => {
    return (
        <>
            <div className={style.mainbox}>
                <div style={{ width: "100%", height: "50px", border: "1px solid red", textAlign: "center" }}>
                    <h1>Navbar</h1>
                </div>
                <div className={style.secondbox}>
                    <div className={style.sidebar}>
                        <ul>
                            <a href=""><li>OverView</li></a>
                            <br /><br />
                            <a href=""><li>Kyc</li></a>
                            <br /><br />
                            <a href=""><li>Bank</li></a>
                            <br /><br />
                            <a href=""><li>Support</li></a>
                            <br /><br />
                            <a href=""><li>Weather Manager</li></a>
                            <br /><br />
                            <a href=""><li>Setting</li></a>
                        </ul>
                    </div>
                    <div className={style.general_details_box}>
                        <p>General Details</p>
                        
                        <hr />
                        <p><span className={style.name}>Name</span> <span style={{marginLeft:"18%"}} className={style.input_box} ><input type="text" placeholder='Enter Your Name'/></span> <span className={style.button_box}><button>Update</button></span></p>
                        <hr />
                        <p><span className={style.name}>Email</span> <span style={{marginLeft:"18%"}} className={style.input_box} ><input type="text" placeholder='Enter Your Email'/></span> </p>
                        <hr />
                        <p><span className={style.name}>Phone</span> <span style={{marginLeft:"18%"}} className={style.input_box} ><input type="text" placeholder='Enter Phone Number'/></span> </p>
                        <hr />
                        <p><span className={style.name}>Occupation</span> <span style={{marginLeft:"14%"}} className={style.input_box} ><select name="" id="">
                            <option value="">Student</option>
                            <option value="">Business Man</option>
                            <option value="">Self Employed</option>
                            </select></span> </p>
                        <hr />
                        <p><span className={style.name}>DIN Number</span> <span style={{marginLeft:"13%"}} className={style.input_box} ><input type="text" placeholder='Enter DIN Number'/></span> </p>
                        <hr />
                        <p><span className={style.name}>Nominee Name</span> <span className={style.input_box} ><input type="text" placeholder='Enter Nominee Name'/></span> </p>
                        <hr />
                        <button className={style.create_account_btn}>Create Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account