import React from "react";
import style from "./portfolio.module.css";
// import FaAngleDown from "react-icons/fa";
import CollapsibleExample from "../Navbar/Navbar";

const Portfolio = () => {
  return (
    <>
      <div className={style.mainbox}>
        {/* <div style={{ width: "100%", height: "50px", border: "1px solid red", textAlign: "center" }}>
                    <h1>Portfolio</h1>
                </div> */}
        <CollapsibleExample />
        {/* secondbox start*/}
        <div className={style.secondbox}>
          <p
            className={style.myportfolio_text_deco}
            style={{ fontSize: "35px" }}
          >
            My Portfolio
          </p>
          <div style={{ display: "flex", gap: "10px", paddingBottom: "80px" }}>
            <div className={style.current_value_box}>
              <div>
                <p>
                  current value <br />{" "}
                  <span>
                    <b style={{ color: "#170F49" }}>₹ 3,90,220</b>{" "}
                  </span>
                </p>
              </div>
              <div style={{ display: "flex" }}>
                {/* growth icon */}
                <div
                  style={{
                    borderRadius: "40%",
                    backgroundColor: "white",
                    height: "40%",
                    marginLeft:"-50px"
                  }}
                >
                  <img
                    style={{ height: "25px", width: "25px" }}
                    src="rise.png"
                    alt="growth_icon"
                  />
                </div>
                <div>
                  <p>
                    <b>18%</b>
                  </p>
                </div>
              </div>
            </div>

            <div className={style.invested_value_box}>
              <div>
                <p>
                  Invested Value <br />{" "}
                  <span>
                    <b style={{ color: "#170F49" }}>₹ 3,55,150</b>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* My Asset box start */}
          <div className={style.my_asset_mainbox}>
            <div className={style.my_asset_mainbox_firstbox}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>My Assets</p>
                <p>Overall </p>
              </div>
              <div className={style.company_box}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={style.circle_box}>
                    <p>A</p>
                  </div>
                  <div>
                    <p>
                      <b>Company A </b>
                      <br /> <span style={{ color: "#a4d1ef" }}>₹1,50,200</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "green", marginTop: "20px" }}>+3.48%</p>
                </div>
              </div>
              {/* 2nd box */}
              <div className={style.company_box}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={style.circle_box}>
                    <p>A</p>
                  </div>
                  <div>
                    <p>
                      <b>Company A </b>
                      <br /> <span style={{ color: "#a4d1ef" }}>₹1,50,200</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "green", marginTop: "20px" }}>+3.48%</p>
                </div>
              </div>
              {/* 3rd box */}
              <div className={style.company_box}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={style.circle_box}>
                    <p>A</p>
                  </div>
                  <div>
                    <p>
                      <b>Company A </b>
                      <br /> <span style={{ color: "#a4d1ef" }}>₹1,50,200</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "red", marginTop: "20px" }}>-1.08%</p>
                </div>
              </div>
              {/* 4th box */}
              <div className={style.company_box}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={style.circle_box}>
                    <p>A</p>
                  </div>
                  <div>
                    <p>
                      <b>Company A </b>
                      <br /> <span style={{ color: "#a4d1ef" }}>₹1,50,200</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "green", marginTop: "20px" }}>+3.48%</p>
                </div>
              </div>
              {/* 5th box */}
              <div className={style.company_box}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className={style.circle_box}>
                    <p>A</p>
                  </div>
                  <div>
                    <p>
                      <b>Company A </b>
                      <br /> <span style={{ color: "#a4d1ef" }}>₹1,50,200</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "green", marginTop: "20px" }}>+3.48%</p>
                </div>
              </div>
              {/* Pia chart */}
              <div></div>
            </div>
            <div className={style.piachart}>
              <p>Efficiency</p>
              <div className={style.piachartbox}></div>
            </div>
          </div>
        </div>
        {/* secondbox end*/}
      </div>
    </>
  );
};

export default Portfolio;
