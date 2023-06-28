import React from 'react'
import CollapsibleExample from '../Navbar/Navbar'
import style from "./productDescription.module.css"
import RoomIcon from '@mui/icons-material/Room';
import Button from 'react-bootstrap/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ProgresBar from './ProgresBar';

const ProductDescription = () => {
    return (
        <>
            <CollapsibleExample />
            <div className={style.productdescription_mainbox}>
                <div>
                    <img className={style.mainbox_img} src="house_image.png" alt="" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", width: "97%", margin: "auto" }}>
                    <div>
                        <p style={{ fontWeight: "700", fontSize: "27px" }}>Navi Mumbai Office Opportunity I</p>
                        <p><RoomIcon /> Navi Mumbai</p>
                    </div>
                    <div><Button style={{ backgroundColor: "#554284", marginTop: "50px" }}>Invest now</Button> </div>
                </div>

                <div className={style.rectangle_box} >
                    <div>
                        <div className={style.icon_circle}>
                            <CurrencyRupeeIcon style={{ color: "white", marginLeft: "7px", marginTop: "6px", cursor: "pointer" }} />
                        </div>
                        <p className={style.icon_circle_paragraph}><span>₹ 28 lakhs</span> <br /> Min Investment</p>
                    </div>

                    <div>
                        <div className={style.icon_circle}>
                            <AttachMoneyIcon style={{ color: "white", marginLeft: "7px", marginTop: "6px", cursor: "pointer" }} />
                        </div>
                        <p className={style.icon_circle_paragraph}><span>9 %</span> <br /> Rental Yield</p>
                    </div>

                    <div>
                        <div className={style.icon_circle}>
                            <CurrencyExchangeIcon style={{ color: "white", marginLeft: "7px", marginTop: "6px", cursor: "pointer" }} />
                        </div>
                        <p className={style.icon_circle_paragraph}><span>12.9 %</span> <br /> Target IRR*</p>
                    </div>

                    <div>
                        <div className={style.icon_circle}>
                            <VideoLabelIcon style={{ color: "white", marginLeft: "7px", marginTop: "6px", cursor: "pointer" }} />
                        </div>
                        <p className={style.icon_circle_paragraph}><span>1.7x</span> <br /> Target Multiple*</p>
                    </div>
                </div>

                <div style={{ width: "50%", marginTop: "50px" }}>
                    <ProgresBar />
                </div>
                {/* overview */}
                <div className={style.overview_mainbox}>
                    <div><p>Overview</p></div>
                    <div className={style.vl}></div>
                    <div>
                        <p>This is an opportunity to invest in 19,356 sqft of office space in L&T Seawoods Grand Central, Navi Mumbai. The asset is a world-class commercial property with an integrated mall, residencies, and suburban railway station. The tenant is a leading port operator.

                            <br /><br /> With long lease terms and a strong potential for capital appreciation, the asset is an ideal long-term investment.</p>
                    </div>
                </div>
                <hr />
                <div className={style.overview_mainbox}>
                    <div><p>Location</p></div>
                    <div ></div>
                    <div style={{margin:"13px"}}><p>The asset is located in Seawoods, an upscale part of Navi Mumbai. The property is well connected to the rest of the Mumbai Metropolitan Region by road, rail, and water services. With the upcoming Navi Mumbai airport, metro, and trans-harbour sea link, the area is bound to see greater value appreciation.</p>
                        <div>
                            <iframe style={{ height: "300px", width: "80%", margin: "auto" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711151344!2d73.78056558240766!3d18.52459859956777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687918272852!5m2!1sen!2sin"
                            ></iframe>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711151344!2d73.78056558240766!3d18.52459859956777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687918870090!5m2!1sen!2sin"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                                </iframe> */}
                        </div>
                    </div>
                </div>
                
                {/* Tenancy */}
                {/* <div style={{marginTop:"200px"}} className={style.overview_mainbox}>
                    <div><p>Overview</p></div>
                    <div className={style.vl}></div>
                    <div>
                        <p>This is an opportunity to invest in 19,356 sqft of office space in L&T Seawoods Grand Central, Navi Mumbai. The asset is a world-class commercial property with an integrated mall, residencies, and suburban railway station. The tenant is a leading port operator.

                            <br /><br /> With long lease terms and a strong potential for capital appreciation, the asset is an ideal long-term investment.</p>
                    </div>
                </div>
                <hr /> */}
            </div>
        </>
    )
}

export default ProductDescription