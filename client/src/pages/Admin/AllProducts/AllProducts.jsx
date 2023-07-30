import React, { useEffect, useState } from "react";
import style from "./AllProducts.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProgressBarcom from "../../../component/ProgressBar/ProgressBar";
import ProductEdit from "../EditProduct/ProductEdit";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeductPopup, setShowDeductPopup] = useState(false);
  const [productdata, setProductdata] = useState([])
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

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/product/get-product"
      );
      if (data?.success) {
        setProduct(data.products);
        console.log(data)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting products");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const openDeductPopup = () => {
    setShowDeductPopup(true);
  };

  const closeDeductPopup = () => {
    setShowDeductPopup(false);
  };
  const openEditPopup = () => {
    setIsPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsPopupOpen(false);
  };
  const handleProfileData = (e) => {
    setProductdata(e)
  }
  console.log(productdata)
  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />

        <div className={style.MainDash}>
          <h1>AllProducts</h1>
          <div className={style.Home_third_part}>
            <div className={style.Home_third_part_box}>
              {product.map((e) => (
                <div className={style.Home_third_part_box_div}>
                  <img
                    src={`/uploads/${e.imgpath}`}
                    alt=""
                    style={{ height: "215px" }}
                  />
                  <p className={style.Home_third_part_box_div_text}>
                    {e.fname}
                  </p>
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
                  <button
                            onClick={() => {
                              handleProfileData(e);
                              openEditPopup();
                            }}
                          >
                            Edit
                          </button>
                          {isPopupOpen && <ProductEdit onClose={closeEditPopup} productdata={productdata} getAllProducts={getAllProducts}  />}
                    <button>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default AllProducts;
