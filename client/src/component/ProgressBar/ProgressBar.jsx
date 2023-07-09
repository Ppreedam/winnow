import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarcom = (props) => {
   var Total_investment = props.totalFund
   var Grow_amount = props.fundRaised

console.log(Total_investment,Grow_amount)   
   const percentage_of_grow = ((Grow_amount/Total_investment)*100).toFixed(2)

  return (
    <div style={{width:"90%", margin:"auto",paddingTop:"10px"}} >
        <ProgressBar variant="black" style={{height: "9px"}} now={percentage_of_grow} />
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} >
              <div><p>{Grow_amount} Cr/{Total_investment} Cr</p></div>
              <div><p>{percentage_of_grow}% Complete</p></div>
            </div>
    </div>
  )
}

export default ProgressBarcom