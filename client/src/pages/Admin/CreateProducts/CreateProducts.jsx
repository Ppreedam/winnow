import React, { useState, useEffect } from "react";
import style from "./CreateProducts.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
const { Option } = Select;

const CreateProducts = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [funded, setFunded] = useState("");
  const [backers, setBackers] = useState("");
  const [totalFund, setTotalFund] = useState("");
  const [fundRaised, setFundRaised] = useState("");

  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      funded: funded,
      backers: backers,
      totalFund: totalFund,
      category: category,
      fundRaised: fundRaised,
      photo: photo,
    };

    try {
      const { data } = axios.post(
         "http://localhost:8000/api/v1/product/create-product",
        obj
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/admin/allproducts");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1>Create Product</h1>
          <div className={style.formContainer}>
            <Select
              bordered={false}
              placeholder="Select a category"
              // size="large"
              showSearch
              className={style.selectCategory}
              onChange={(value) => {
                setCategory(value);
              }}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <input
              type="text"
              value={photo}
              placeholder="Paste your Image Link"
              className={style.productName}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <img src={photo} style={{height:"300px", width:"500px"}}/>
            {/* <div className={style.categoryImage}>
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3">
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div> */}
            <input
              type="text"
              value={name}
              placeholder="write a name"
              className={style.productName}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              value={backers}
              placeholder="Hpw much funded(Percentage)"
              className={style.productName}
              onChange={(e) => setBackers(e.target.value)}
            />
            <input
              type="number"
              value={funded}
              placeholder="Add Backers Number"
              className={style.productName}
              onChange={(e) => setFunded(e.target.value)}
            />
            <input
              type="number"
              value={totalFund}
              placeholder="Total fund required"
              className={style.productName}
              onChange={(e) => setTotalFund(e.target.value)}
            />
            <input
              type="number"
              value={fundRaised}
              placeholder="How much fund raised till now"
              className={style.productName}
              onChange={(e) => setFundRaised(e.target.value)}
            />

            {/* <textarea
              type="text"
              value={description}
              placeholder="write a description"
              className={style.productTextArea}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="number"
              value={price}
              placeholder="write a Price"
              className={style.productName}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              value={quantity}
              placeholder="write a quantity"
              className={style.productName}
              onChange={(e) => setQuantity(e.target.value)}
            /> */}
            <div className="mb-3">
              <button
                className={style.createProductButton}
                  onClick={handleCreate}
              >
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default CreateProducts;
