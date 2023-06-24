import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarcom = () => {
   var Total_investment = 2.5
   var Grow_amount = 1.62

   const percentage_of_grow = (Grow_amount/Total_investment)*100
  return (
    <div style={{width:"90%", margin:"auto",paddingTop:"10px"}} >
        <ProgressBar animated now={percentage_of_grow} />
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} >
              <div><p>{Grow_amount} Cr/{Total_investment} Cr</p></div>
              <div><p>{percentage_of_grow}% Complete</p></div>
            </div>
    </div>
  )
}

export default ProgressBarcom