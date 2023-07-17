import React, { useEffect, useState } from "react";
import CollapsibleExample from "../Navbar/Navbar";
import style from "./productDescription.module.css";
import RoomIcon from "@mui/icons-material/Room";
import Button from "react-bootstrap/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import ProgresBar from "./ProgresBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  console.log("params._slug", params.slug)

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        // `https://winnow-backend-api.onrender.com/api/v1/product/get-product/${params.slug}`
        `http://localhost:8000/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      //   getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("getProduct", product);
  return (
    <>
      <CollapsibleExample />
      <div className={style.productdescription_mainbox}>
        <div>
          <img
            className={style.mainbox_img}
            src={`/uploads/${product.imgpath}`}
            alt=""
          />
        </div>
        <div className={style.location}>
          <div>
            <p className={style.locationName}>
              {product.fname}
            </p>
            <p>
              <RoomIcon /> {product.locationName}
            </p>
          </div>
          <div>
            <button className={style.locationButton}>Invest now</button>
          </div>
        </div>

        <div className={style.rectangle_box}>
          <div>
            <div className={style.icon_circle}>
              <CurrencyRupeeIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </div>
            <p className={style.icon_circle_paragraph}>
              <p>₹ {product.minInvestment} lakhs</p>
              <p>Min Investment</p>
            </p>
          </div>

          <div>
            <div className={style.icon_circle}>
              <AttachMoneyIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </div>
            <p className={style.icon_circle_paragraph}>
              <p>{product.rentalYield} %</p>
              <p>Rental Yield</p>
            </p>
          </div>

          <div>
            <div className={style.icon_circle}>
              <CurrencyExchangeIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </div>
            <p className={style.icon_circle_paragraph}>
              <p>{product.targetIRR} %</p>
              <p>Target IRR*</p>
            </p>
          </div>

          <div>
            <div className={style.icon_circle}>
              <VideoLabelIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </div>
            <p className={style.icon_circle_paragraph}>
              <p>{product.targetMultiple}x</p>
              <p>Target Multiple*</p>
            </p>
          </div>
        </div>

        <div className={style.progressbar}>
          <ProgresBar totalFund={product.totalFund}
                fundRaised={product.fundRaised} 
                totaldays={product.date}
                backers={product.backers}
                funded={product.funded}
          />
        </div>
        {/* overview */}
        <div className={style.overview_mainbox}>
          <div>
            <p>Overview</p>
          </div>
          <div>
            <p>
              {/* This is an opportunity to invest in 19,356 sqft of office space in
              L&T Seawoods Grand Central, Navi Mumbai. The asset is a
              world-class commercial property with an integrated mall,
              residencies, and suburban railway station. The tenant is a leading
              port operator. */}
              {product.overview}
              {/* <br />
              <br /> With long lease terms and a strong potential for capital
              appreciation, the asset is an ideal long-term investment. */}
            </p>
          </div>
        </div>
        <hr />
        <div className={style.overview_mainbox}>
          <div>
            <p>Location</p>
          </div>
          {/* <div ></div> */}
          <div>
            <p>
              {/* The asset is located in Seawoods, an upscale part of Navi Mumbai.
              The property is well connected to the rest of the Mumbai
              Metropolitan Region by road, rail, and water services. With the
              upcoming Navi Mumbai airport, metro, and trans-harbour sea link,
              the area is bound to see greater value appreciation. */}
              {product.locationDesc}
            </p>
            <div>
              <iframe
                className={style.mapBox}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711151344!2d73.78056558240766!3d18.52459859956777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687918272852!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
        <hr />
        {/* Tenancy */}
        <div className={style.overview_mainbox}>
          <div>
            <p>Tenancy</p>
          </div>
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              Tenant Overview
            </p>
            <p>{product.tenancy}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
