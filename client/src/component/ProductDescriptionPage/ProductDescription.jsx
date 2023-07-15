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
    if (params?._id) getProduct();
  }, [params?._id]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://winnow-backend-api.onrender.com/api/v1/product/get-product/${params._id}`
      );
      setProduct(data?.product);
      //   getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product);
  return (
    <>
      <CollapsibleExample />
      <div className={style.productdescription_mainbox}>
        <div>
          <img
            className={style.mainbox_img}
            src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={style.location}>
          <div>
            <p className={style.locationName}>
              Navi Mumbai Office Opportunity I
            </p>
            <p>
              <RoomIcon /> Navi Mumbai
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
              <p>₹ 28 lakhs</p>
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
              <p>9 %</p>
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
              <p>12.9 %</p>
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
              <p>1.7x</p>
              <p>Target Multiple*</p>
            </p>
          </div>
        </div>

        <div className={style.progressbar}>
          <ProgresBar />
        </div>
        {/* overview */}
        <div className={style.overview_mainbox}>
          <div>
            <p>Overview</p>
          </div>
          <div>
            <p>
              This is an opportunity to invest in 19,356 sqft of office space in
              L&T Seawoods Grand Central, Navi Mumbai. The asset is a
              world-class commercial property with an integrated mall,
              residencies, and suburban railway station. The tenant is a leading
              port operator.
              <br />
              <br /> With long lease terms and a strong potential for capital
              appreciation, the asset is an ideal long-term investment.
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
              The asset is located in Seawoods, an upscale part of Navi Mumbai.
              The property is well connected to the rest of the Mumbai
              Metropolitan Region by road, rail, and water services. With the
              upcoming Navi Mumbai airport, metro, and trans-harbour sea link,
              the area is bound to see greater value appreciation.
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
            <p>The tenant is a leading port operator.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
