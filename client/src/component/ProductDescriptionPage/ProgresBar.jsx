import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgresBar = (props) => {
    var Total_investment = props.totalFund
    var Grow_amount = props.fundRaised

    const percentage_of_grow = (Grow_amount / Total_investment) * 100
    

    const totaldays = (startdate) => {
        // const startDate = new Date("2023-06-01T00:00:00.000Z");
        const startDate = new Date(startdate);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds between the two dates
        const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    
        // Calculate the number of days by dividing the time difference by the number of milliseconds in a day
        const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return numDays;
      };
    return (
        <div style={{ width: "90%", margin: "auto", paddingTop: "10px" }} >
            <div style={{ display: "flex", gap: "60px" }}>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>{props.funded} % <br /> Funded</p> 
                </div>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>{props.backers} <br /> Backers</p>
                </div>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"550",fontFamily:"Rubik",lineHeight:"29.63px"}}>{totaldays(props.totaldays)} <br /> Days to go</p>
                </div>
            </div>
            <ProgressBar variant="black" style={{height: "9px"}} now={percentage_of_grow} />
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" , marginTop:"20px" }} >
                {/* <div><p>{Grow_amount} Cr/{Total_investment} Cr</p></div> */}
                <div><p> <span style={{fontFamily:"Rubik",fontStyle:"italic",fontSize:"17px",fontWeight:"550"}}>25,90,08,000</span> <br /> Asset Value</p> </div>
                <div><p><span style={{ fontWeight: "700", fontSize: "20px" }}>{percentage_of_grow}% </span>  Complete</p></div>
            </div>
        </div>
    )
}

export default ProgresBar