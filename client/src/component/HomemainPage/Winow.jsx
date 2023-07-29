import React, { useContext, useEffect, useState } from "react";
import mobile_imag from "./Image/mobile.png";
import bottom_full_vector from "./Image/bottom_full_vector.png";
import top_full_vector from "./Image/top_full_vector.png";
import left_vector from "./Image/left_vector.png";
import right_vector from "./Image/right_vector.png";
import dot_vector from "./Image/dot_vector.png";
import bold_vector from "./Image/bold_vector.png";
import phone from "./Image/phone.png";
import garphic from "./Image/graphic.png";
import team from "./Image/team.png";
import CollapsibleExample from "../Navbar/Navbar";
import style from "./Winnow.module.css";
import WordFlick from "./WordFlick";
import ProgressBarcom from "../ProgressBar/ProgressBar";
import investment_image from "./Image/investment_image.png";
import { AuthContext } from "../Context/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsCheck2 } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Whatsapp from "../Whattsapp/Whatsapp";

const Winow = () => {
  const [product, setProduct] = useState([]);
  const [email, setEmail] = useState("");
  // console.log(email);

  const totaldays = (startdate) => {
    const startDate = new Date(startdate);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return numDays;
  };

  // Email validation function using regular expression
  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = async () => {
    try {
      // Email validation
      if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address.");
        return; // Exit the function early if email validation fails
      }
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/email/add-email",
        {
          email,
        }
      );
      if (data?.success) {
        setEmail("");
        // Update the state with the new category before navigating or showing a toast
        toast.success("email saved successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log("error:", error);
      toast.error("something went wrong in input form");
    }
  };

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://156.67.221.116:8000/api/v1/product/get-product"
      );
      if (data?.success) {
        setProduct(data.products);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong in getting products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const navigate = useNavigate();
  const expert = [
    {
      heading: "Pre-IPO Venture",
      text: "Invest in the world’s top private companies.",
    },
    {
      heading: "Real Estate",
      text: "Invest in highly-vetted commercial and residential real estate projects.",
    },
    {
      heading: "Blue-Chip Art",
      text: "Invest in prized artworks from the world’s most renowned artists.",
    },
  ];

  const investment = [
    {
      heading: "Investment Memos",
      text: "Every investment comes with a comprehensive investment memo written by our in-house team.",
    },
    {
      heading: "Performance Tracking",
      text: "No more quarterly updates. Monitor your portfolio progress daily right on the Winnow portal.",
    },
    {
      heading: "Ask an Advisor",
      text: "Have a question? Ask us directly in the app.",
    },
    {
      heading: "Market Insights",
      text: "Stay up-to-date on the latest news and trends related to alternative investing.",
    },
  ];
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div className={style.main}>
      <CollapsibleExample />
      <div className={style.first_part}>
        <div className={style.text_box}>
          <p className={style.text_box_meet}>
            Meet your World <br />
            <span>class</span>
            <span className={style.word}>
              {" "}
              <WordFlick />
            </span>{" "}
            <br /> Portfolio.
          </p>
          <p className={style.text_box_Stock}>
            Forget stocks and bonds. Bring your wealth to its full potential
            with expertly picked investments across Venture Capital, Artwork,
            Real Estate, Collectibles & More.
          </p>

          <div className={style.text_box_button_main}>
            <p>* Join our News letter to get latest updates</p>
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={sendEmail}>
                <BsCheck2 />
              </button>
            </div>
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
          {product.map((e) => (
            <div className={style.Home_third_part_box_div}>
              <img
                src={`/uploads/${e.imgpath}`}
                alt=""
                style={{ height: "215px" }}
              />
              <p className={style.Home_third_part_box_div_text}>{e.fname}</p>
              <hr className={style.Home_third_part_box_div_hr} />
              <div className={style.Home_third_part_box_div_funde}>
                <div>{e.funded} % Funded</div>
                <div>{e.backers} Backers</div>
                <div>{totaldays(e.date)} Days to go</div>
              </div>
              {/* <ProgressBarcom
                totalFund={e.totalFund}
                fundRaised={e.fundRaised}
              /> */}
              <ProgressBarcom
                totalFund={e.totalFund}
                fundRaised={e.fundRaised}
              />
              {/* <ProgressBarcom1/> */}
              <div className={style.Home_third_part_box_button}>
                <button>High Rated</button>
                <button>Fast Filling</button>
              </div>
              <div className={style.Home_third_part_box_hover_button}>
                <button onClick={() => navigate(`productDesc/${e._id}`)}>
                  Invest Now
                </button>
              </div>
            </div>
          ))}
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
        </div>
        <div className={style.Home_fourth_part_box_2}>
          <img src={phone} alt="" />
        </div>
      </div>
      {/* -----------------------------------------------fith_part------------------------- */}
      <div className={style.Home_fith_part}>
        <div className={style.Home_fith_part_box_1}>
          <div className={style.parentItem}>
            <div className={style.ipo}>
              <h3 className={style.Home_fith_part_box_1_heading}>
                Pre-IPO Venture
              </h3>
              <p className={style.Home_fith_part_box_1_text}>
                Invest in the world’s top private companies.
              </p>
            </div>
            <div className={style.realState}>
              <h3 className={style.Home_fith_part_box_1_heading}>
                Real Estate
              </h3>
              <p className={style.Home_fith_part_box_1_text}>
                Invest in highly-vetted commercial and residential real estate
                projects.
              </p>
            </div>
          </div>
          <div className={style.blueChip} id="blueChip">
            <h3 className={style.Home_fith_part_box_1_heading}>
              Blue-Chip Art
            </h3>
            <p className={style.Home_fith_part_box_1_text}>
              Invest in prized artworks from the world’s most renowned artists.
            </p>
          </div>
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
            All Strategies
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
        </div>
        <div className={style.Home_fourth_part_box_2}>
          <img src={garphic} alt="" />
        </div>
      </div>
      {/* -----------------------------------------------------reamining part---------------------------------------------------- */}
      <div className={style.Home_investment_part}>
        <div>
          <p className={style.Home_investment_part_box_1_heading}>
            World-class assets deserve a world-class experience.
          </p>
          <div className={style.Home_investment_part_box_1}>
            {investment.map((el) => {
              return (
                <div className={style.investment}>
                  <h3>{el.heading}</h3>
                  <p>{el.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.Home_investment_part_box_2}>
          <img src={investment_image} alt="" />
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
          />
          <button onClick={sendEmail}>
            <BsCheck2 />
          </button>
        </div>
      </div>
      <ToastContainer />
      {/* <Whatsapp/> */}
    </div>
  );
};

export default Winow;
