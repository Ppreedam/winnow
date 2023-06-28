import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgresBar = () => {
    var Total_investment = 2.5
    var Grow_amount = 1.62

    const percentage_of_grow = (Grow_amount / Total_investment) * 100
    return (
        <div style={{ width: "90%", margin: "auto", paddingTop: "10px" }} >
            <div style={{ display: "flex", gap: "60px" }}>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>1,1016 % <br /> Funded</p> 
                </div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>5,541 <br /> Backers</p>
                </div>
                <div>
                    <p style={{fontSize:"25px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>19 <br /> Days to go</p>
                </div>
            </div>
            <ProgressBar animated now={percentage_of_grow} />
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" , marginTop:"20px" }} >
                {/* <div><p>{Grow_amount} Cr/{Total_investment} Cr</p></div> */}
                <div><p> <span style={{fontFamily:"Rubik",fontStyle:"italic",fontSize:"25px",fontWeight:"550"}}>25,90,08,000</span> <br /> Asset Value</p> </div>
                <div><p><span style={{ fontWeight: "700", fontSize: "20px" }}>{percentage_of_grow}% </span>  Complete</p></div>
            </div>
        </div>
    )
}

export default ProgresBar