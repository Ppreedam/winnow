import React from "react";
import mobile_imag from "./Image/mobile.png";
import bottom_full_vector from "./Image/bottom_full_vector.png";
import top_full_vector from "./Image/top_full_vector.png";
import left_vector from "./Image/left_vector.png";
import right_vector from "./Image/right_vector.png";
import dot_vector from "./Image/dot_vector.png";
import bold_vector from "./Image/bold_vector.png";
import house_image from "./Image/house_image.png";
import percentage_line from "./Image/percentage_line.png";
import phone from "./Image/phone.png";
import garphic from "./Image/graphic.png";
import team from "./Image/team.png";
import CollapsibleExample from "../Navbar/Navbar";
import style from "./Winnow.module.css";
import WordFlick from "./WordFlick";

const Winow = () => {
  const expert = [
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
      learn: "Learn More",
    },
  ];



  return (
    <div style={{ width: "100%" }}>
      <CollapsibleExample />
      <div className={style.first_part}>
        <div className={style.text_box}>
          <p className={style.text_box_meet}>
            Meet your Worl- <br /><span>class</span> 
             <span className={style.word}> <WordFlick/></span> <br /> Portfolio.
          </p>
          <p className={style.text_box_Stock}>
            Forget stocks and bonds. Bring your wealth to its full potential
            with expertly picked investments across Venture Capital, Artwork,
            Real Estate, Collectibles & More.
          </p>

          <div className={style.text_box_button}>
            <input type="text" placeholder="Enter your email" />
            <button>Reserve Your Spot</button>
          </div>
        </div>
        <div className={style.image_box}>
          <img src={mobile_imag} alt="Winnow mobile Image" />
        </div>
      </div>
      {/* ------------------------------------second_part------------------------------------------------------------- */}
      <div className={style.Home_second_part}>
        <div className={style.Home_second_part_box1}>
          <div className={style.Home_second_part_box1_image}>
            <img src={left_vector} alt="" />
            <img src={left_vector} alt="" />
            <img src={right_vector} alt="" />
          </div>
          <p className={style.Home_second_part_box_heading}>
            Professional Management
          </p>
          <p className={style.Home_second_part_box_text}>
            As an Investment Advisor, our team of experts will design and manage
            your customized portfolio across the strategies you choose.
          </p>
        </div>
        <div className={style.Home_second_part_box2}>
          <div className={style.Home_second_part_box2_image}>
            <img src={bottom_full_vector} alt="" />
            <img src={top_full_vector} alt="" />
            <img src={bottom_full_vector} alt="" />
            <img src={top_full_vector} alt="" />
          </div>
          <p className={style.Home_second_part_box_heading}>Premium Assets</p>
          <p className={style.Home_second_part_box_text}>
            Unlike most wealth advisors, we focus exclusively on hard-to-access
            alternative assets typically reserved for the ultra-wealthy.
          </p>
        </div>
        <div className={style.Home_second_part_box3}>
          <div className={style.Home_second_part_box3_image}>
            <img src={dot_vector} alt="" />
            <img src={bold_vector} alt="" />
          </div>
          <p className={style.Home_second_part_box_heading}>
            Broad Diversification
          </p>
          <p className={style.Home_second_part_box_text}>
            Investing in alternative asset classes not only boosts your return
            potential, but also limits downside risk.
          </p>
        </div>
        style.
      </div>
      {/* ----------------------------------------third_part------------------------------------------------------------  */}

      <div className={style.Home_third_part}>
        <p className={style.Home_third_part_heading}>
          Finally, a portfolio actually worth talking about.
        </p>
        <p className={style.Home_third_part_text}>
          No more ETFs and index funds. With Winnow, expand your investments
          into trailblazing businesses, cultural icons, innovative technologies,
          and world-class artists.
        </p>
        <div className={style.Home_third_part_box}>
          <div className={style.Home_third_part_box_div}>
            <img src={house_image} alt="" />
            <p className={style.Home_third_part_box_div_text}>
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className={style.Home_third_part_box_div_hr} />
            <div className={style.Home_third_part_box_div_funde}>
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className={style.Home_third_part_box_number}>
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className={style.Home_third_part_box_button}>
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className={style.Home_third_part_box_hover_button}>
              <button>Invest Now</button>
            </div>
          </div>
          {/* ---------------- */}
          <div className={style.Home_third_part_box_div}>
            <img src={house_image} alt="" />
            <p className={style.Home_third_part_box_div_text}>
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className={style.Home_third_part_box_div_hr} />
            <div className={style.Home_third_part_box_div_funde}>
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className={style.Home_third_part_box_number}>
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className={style.Home_third_part_box_button}>
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className={style.Home_third_part_box_hover_button}>
              <button>Invest Now</button>
            </div>
          </div>
          {/* ---------------- */}
          <div className={style.Home_third_part_box_div}>
            <img src={house_image} alt="" />
            <p className={style.Home_third_part_box_div_text}>
              Shield the risk by leasing ATMs to India's largest payment
              solutions provid...
            </p>
            <hr className={style.Home_third_part_box_div_hr} />
            <div className={style.Home_third_part_box_div_funde}>
              <div>1,1016 % Funded</div>
              <div>5,541 Backers</div>
              <div>19 Days to go</div>
            </div>
            <img src={percentage_line} alt="" />
            <div className={style.Home_third_part_box_number}>
              <p>1.6 Cr/2 Cr</p>
              <p>81% Complete</p>
            </div>
            <div className={style.Home_third_part_box_button}>
              <button>High Rated</button>
              <button>Fast Filling</button>
            </div>
            <div className={style.Home_third_part_box_hover_button}>
              <button>Invest Now</button>
            </div>
          </div>
          {/* -------------- */}
        </div>
      </div>
      {/* ----------------------------------------Forth_part------------------------------------------------------------  */}
      <div className={style.Home_fourth_part}>
        <div className={style.Home_fourth_part_box_1}>
          <p className={style.Home_fourth_part_box_1_heading}>
            You choose the strategy, We do the rest.
          </p>
          <p className={style.Home_fourth_part_box_1_text}>
            Easily allocate your Winnow portfolio across several asset classes
            with the swipe of a finger. Tell us what you're looking for and
            we'll build you a custom portfolio of highly-curated assets.
          </p>
          <button className={style.Home_fourth_part_box_1_button}>
            How it works
          </button>
        </div>
        <div className={style.Home_fourth_part_box_2}>
          <img src={phone} alt="" />
        </div>
      </div>
      {/* -----------------------------------------------fith_part------------------------- */}
      <div className={style.Home_fith_part}>
        <div className={style.Home_fith_part_box_1}>
          {expert.map((el) => {
            return (
              <div>
                <h3>{el.heading}</h3>
                <p>{el.text}</p>
                <h4>{`${el.learn} ->`}</h4>
              </div>
            );
          })}
        </div>
        <div className={style.Home_fith_part_box_2}>
          <p className={style.Home_fith_part_box_2_heading}>
            Expert Strategies
          </p>
          <p className={style.Home_fith_part_box_2_text}>
            We do the heavy lifting. Our team of experts has designed
            time-tested strategies for each asset class to ensure clients get
            the right investments for their portfolios.
          </p>
          <button className={style.Home_fith_part_box_2_button}>
            How it works
          </button>
        </div>
      </div>
      {/* -----------------------------------------sixth_part------------------------------------------- */}
      <div className={style.Home_fourth_part}>
        <div className={style.Home_fourth_part_box_1}>
          <p className={style.Home_fourth_part_box_1_heading}>
            Designed to complement, not compete with your stock portfolio.
          </p>
          <p className={style.Home_fourth_part_box_1_text}>
            Diversifying your portfolio into multiple alternative asset classes
            can limit your overall portfolio risk while enhancing your potential
            returns.
          </p>
          <button className={style.Home_fourth_part_box_1_button}>
            Our Research
          </button>
        </div>
        <div className={style.Home_fourth_part_box_2}>
          <img src={garphic} alt="" />
        </div>
      </div>
      {/* ---------------------------------------------------seventh_part--------------------------------------------- */}
      <div className={style.Home_seventh_part}>
        <div className={style.Home_seventh_part_box_2}>
          <img src={team} alt="" />
        </div>
        <div className={style.Home_seventh_part_box_1}>
          <p className={style.Home_seventh_part_box_1_heading}>
            A team built for private market investing.
          </p>
          <p className={style.Home_seventh_part_box_1_text}>
            Our founders have years of experience investing in these asset
            classes and have built a team whose knowledge is second-to-none. We
            also have a deep network of industry insiders and investment
            partners to help us source the best opportunities on the market. We
            are focused on making sure our clients have access to new and
            exciting investment opportunities and feel confident in their
            future.
          </p>
          <button className={style.Home_seventh_part_box_1_button}>
            About Winnow
          </button>
        </div>
      </div>
      {/* -----------------------------------------------eight_part------------------------------------------------ */}
      <div className={style.Home_eighth_part}>
        <p className={style.Home_eighth_part_heading}>
          Join our list of exclusive investors
        </p>
        <div className={style.text_box_button1}>
          <input type="text" placeholder="Enter your email" />
          <button>Reserve Your Spot</button>
        </div>
      </div>
    </div>
  );
};

export default Winow;
