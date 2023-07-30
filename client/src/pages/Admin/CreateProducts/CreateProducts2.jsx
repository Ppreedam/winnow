import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import style from "./CreateProducts.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProducts2 = () => {
  const [fname, setFName] = useState("");

  const [file, setFile] = useState("");
  const [backers, setBackers] = useState("");
  const [funded, setFunded] = useState("");
  const [totalFund, setTotalFund] = useState("");
  const [fundRaised, setFundRaised] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const [assetvalue, setAssetvalue] = useState("");
  const [minInvestment, setMinInvestment] = useState("");
  const [rentalYield, setRentalYield] = useState("");
  const [targetIRR, setTargetIRR] = useState("");
  const [targetMultiple, setTargetMultiple] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationDesc, setLocationDesc] = useState("");
  const [overview, setOverview] = useState("");
  const [tenancy, setTenancy] = useState("");

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
        "http://156.67.221.116:8000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      // console.log(error);
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
    formData.append("categories", category);
    formData.append("assetvalue", assetvalue);
    formData.append("minInvestment", minInvestment);
    formData.append("rentalYield", rentalYield);
    formData.append("targetIRR", targetIRR);
    formData.append("targetMultiple", targetMultiple);
    formData.append("locationName", locationName);
    formData.append("locationDesc", locationDesc);
    formData.append("overview", overview);
    formData.append("tenancy", tenancy);

    // console.log(file, fname, backers, funded, totalFund, fundRaised)

    setFName('')
    setBackers('')
    setFunded('')
    setTotalFund('')
    setFundRaised('')
    setCategory('')
    setAssetvalue('')
    setMinInvestment('')
    setRentalYield('')
    setTargetIRR('')
    setTargetMultiple('')
    setLocationName('')
    setLocationDesc('')
    setOverview('')
    setTenancy('')

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = axios.post(
      "http://localhost:8000/api/v1/product/createProduct",
      formData,
      config
    )
      .then((res) => {
        toast.success("Product Created Successfully");
      })
      .catch((err) => console.log(err))
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
              value={fname}
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
              value={backers}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Backers Fund</Form.Label>
            <Form.Control
              type="number"
              name="funded"
              onChange={(e) => setFunded(e.target.value)}
              placeholder=""
              value={funded}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Total fund required</Form.Label>
            <Form.Control
              type="number"
              name="totalFund"
              onChange={(e) => setTotalFund(e.target.value)}
              placeholder=""
              value={totalFund}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How much fund raised till now</Form.Label>
            <Form.Control
              type="number"
              name="fundRaised"
              onChange={(e) => setFundRaised(e.target.value)}
              placeholder=""
              value={fundRaised}
            />
          </Form.Group>

          {/* new field */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Assets Value</Form.Label>
            <Form.Control
              type="number"
              name="assetvalue"
              onChange={(e) => setAssetvalue(e.target.value)}
              placeholder=""
              value={assetvalue}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Minimum Investment</Form.Label>
            <Form.Control
              type="number"
              name="minInvestment"
              onChange={(e) => setMinInvestment(e.target.value)}
              placeholder=""
              value={minInvestment}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rental Yield</Form.Label>
            <Form.Control
              type="number"
              name="rentalYield"
              onChange={(e) => setRentalYield(e.target.value)}
              placeholder=""
              value={rentalYield}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Target IRR</Form.Label>
            <Form.Control
              type="number"
              name="targetIRR"
              onChange={(e) => setTargetIRR(e.target.value)}
              placeholder=""
              value={targetIRR}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Target Multiple</Form.Label>
            <Form.Control
              type="number"
              name="targetMultiple"
              onChange={(e) => setTargetMultiple(e.target.value)}
              placeholder=""
              value={targetMultiple}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location Name</Form.Label>
            <Form.Control
              type="text"
              name="locationName"
              onChange={(e) => setLocationName(e.target.value)}
              placeholder=""
              as="textarea" rows={2}
              value={locationName}
            />
          </Form.Group>

          <Form.Group class="mb-3" controlId="formBasicEmail">
            <Form.Label>Location Description</Form.Label>
            <Form.Control
              type="text"
              name="locationDesc"
              onChange={(e) => setLocationDesc(e.target.value)}
              placeholder=""
              as="textarea" rows={15}
              value={locationDesc}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Overview</Form.Label>
            <Form.Control
              type="text"
              name="overview"
              onChange={(e) => setOverview(e.target.value)}
              placeholder=""
              as="textarea" rows={10}
              value={overview}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tenancy Description</Form.Label>
            <Form.Control
              type="text"
              name="tenancy"
              onChange={(e) => setTenancy(e.target.value)}
              placeholder=""
              as="textarea" rows={8}
              value={tenancy}
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
      <ToastContainer />
    </div>
  );
};

export default CreateProducts2;
