import React from "react";
import "./Winnow.css";
import mobile_imag from "./Image/mobile.png";
import bottom_full_vector from "./Image/bottom_full_vector.png";
import top_full_vector from "./Image/top_full_vector.png";
import left_vector from "./Image/left_vector.png";
import right_vector from "./Image/right_vector.png";
import dot_vector from "./Image/dot_vector.png";
import bold_vector from "./Image/bold_vector.png";
import house_image from "./Image/house_image.png";
import percentage_line from "./Image/percentage_line.png";
const Winow = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="first_part">
        <div className="text_box">
          <p className="text_box_meet">
            Meet your Worl- class Real Estate Portfolio.
          </p>
          <p className="text_box_Stock">
            Forget stocks and bonds. Bring your wealth to its full potential
            with expertly picked investments across Venture Capital, Artwork,
            Real Estate, Collectibles & More.
          </p>

          <div className="text_box_button">
            <input type="text" placeholder="Enter your email" />
            <button>Reserve Your Spot</button>
          </div>
        </div>
        <div className="image_box">
          <img src={mobile_imag} alt="Winnow mobile Image" />
        </div>
      </div>
      {/* ------------------------------------second_part------------------------------------------------------------- */}
      <div className="Home_second_part">
        <div className="Home_second_part_box1">
          <div className="Home_second_part_box1_image">
            <img src={left_vector} alt="" />
            <img src={left_vector} alt="" />
            <img src={right_vector} alt="" />
          </div>
          <p className="Home_second_part_box_heading">
            Professional Management
          </p>
          <p className="Home_second_part_box_text">
            As an Investment Advisor, our team of experts will design and manage
            your customized portfolio across the strategies you choose.
          </p>
        </div>

        <div className="Home_second_part_box2">
          <div className="Home_second_part_box2_image">
            <img src={bottom_full_vector} alt="" />
            <img src={top_full_vector} alt="" />
            <img src={bottom_full_vector} alt="" />
            <img src={top_full_vector} alt="" />
          </div>
          <p className="Home_second_part_box_heading">Premium Assets</p>
          <p className="Home_second_part_box_text">
            Unlike most wealth advisors, we focus exclusively on hard-to-access
            alternative assets typically reserved for the ultra-wealthy.
          </p>
        </div>

        <div className="Home_second_part_box3">
          <div className="Home_second_part_box3_image">
            <img src={dot_vector} alt="" />
            <img src={bold_vector} alt="" />
          </div>
          <p className="Home_second_part_box_heading">Broad Diversification</p>
          <p className="Home_second_part_box_text">
            Investing in alternative asset classes not only boosts your return
            potential, but also limits downside risk.
          </p>
        </div>
      </div>
      {/* ----------------------------------------third_part------------------------------------------------------------  */}

      <div className="Home_third_part">
        <p className="Home_third_part_heading">
          Finally, a portfolio actually worth talking about.
        </p>
        <p className="Home_third_part_text">
          No more ETFs and index funds. With Winnow, expand your investments
          into trailblazing businesses, cultural icons, innovative technologies,
          and world-class artists.
        </p>
        <div className="Home_third_part_box">

          <div className="Home_third_part_box_div">
            <img src={house_image} alt="" />
            <p className="Home_third_part_box_div_text">
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className="Home_third_part_box_div_hr" />
            <div className="Home_third_part_box_div_funde">
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className="Home_third_part_box_number">
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className="Home_third_part_box_button">
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className="Home_third_part_box_hover_button">
              <button>Invest Now</button>
            </div>
          </div>
          {/* ---------------- */}
          <div className="Home_third_part_box_div">
            <img src={house_image} alt="" />
            <p className="Home_third_part_box_div_text">
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className="Home_third_part_box_div_hr" />
            <div className="Home_third_part_box_div_funde">
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className="Home_third_part_box_number">
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className="Home_third_part_box_button">
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className="Home_third_part_box_hover_button">
              <button>Invest Now</button>
            </div>
          </div>
          {/* ---------------- */}
            <div className="Home_third_part_box_div">
            <img src={house_image} alt="" />
            <p className="Home_third_part_box_div_text">
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className="Home_third_part_box_div_hr" />
            <div className="Home_third_part_box_div_funde">
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className="Home_third_part_box_number">
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className="Home_third_part_box_button">
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className="Home_third_part_box_hover_button">
              <button>Invest Now</button>
            </div>
          </div>
          {/* -------------- */}
        </div>
      </div>
       {/* ----------------------------------------Forth_part------------------------------------------------------------  */}
       
    </div>
  );
};

export default Winow;
