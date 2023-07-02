import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import style from "./CreateProducts.module.css";

const CreateProducts2 = () => {
  const [fname, setFName] = useState("");

  const [file, setFile] = useState("");
  const [backers, setBackers] = useState("");
  const [funded, setFunded] = useState("");
  const [totalFund, setTotalFund] = useState("");
  const [fundRaised, setFundRaised] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  };

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };


  // Get all categories
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
      // toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory()
  }, [])
  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("backers", backers);
    formData.append("funded", funded);
    formData.append("totalFund", totalFund);
    formData.append("fundRaised", fundRaised);
    formData.append("categories", category)

    // console.log(file, fname, backers, funded, totalFund, fundRaised)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData, config);

    const res = await axios.post(
      "http://localhost:8000/api/v1/product/register",
      formData,
      config
    );
    console.log(res);

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      // history("");
      console.log("product created")
    }
  };

  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1 style={{ color: "white" }}>Create Your Products</h1>



          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control
              type="file"
              onChange={setimgfile}
              name="photo"
              placeholder=""
            />
          </Form.Group>
          <div className="mb-3">
            {file && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(file)}
                  alt="product_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>
            )}
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              onChange={setdata}
              placeholder="Enter product Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Categories</Form.Label>
            <Form.Select aria-label="Default select example"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Select a category"
              name="categories"
            >
              {categories && categories?.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How Much Funded : (%)</Form.Label>
            <Form.Control
              type="number"
              name="backers"
              onChange={(e) => setBackers(e.target.value)}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Backers Fund</Form.Label>
            <Form.Control
              type="number"
              name="funded"
              onChange={(e) => setFunded(e.target.value)}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Total fund required</Form.Label>
            <Form.Control
              type="number"
              name="totalFund"
              onChange={(e) => setTotalFund(e.target.value)}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How much fund raised till now</Form.Label>
            <Form.Control
              type="number"
              name="fundRaised"
              onChange={(e) => setFundRaised(e.target.value)}
              placeholder=""
            />
          </Form.Group>

          {/* button */}
          <Form className="mt-3">
            <Button variant="light" type="submit" onClick={addUserData}>
              CREATE PRODUCT
            </Button>
          </Form>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default CreateProducts2;
