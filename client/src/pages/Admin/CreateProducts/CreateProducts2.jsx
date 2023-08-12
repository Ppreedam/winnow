import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import style from "./CreateProducts.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProducts2 = () => {
  const [loading, setLoading] = useState(false);
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

  const handleAutoResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
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

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = axios.post(
      "http://156.67.221.116:8000/api/v1/product/createProduct",
      formData,
      config
    )
      .then((res) => {
        setLoading(false);
        toast.success("product created successfully");
      })
      .catch((err) => {
        setLoading(false)
        toast.err("Something error")
      })


    setFName('')
    setFile('')
    setCategories('')
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
  };

  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1 style={{ color: "white" }}>Create Your Products</h1>

          <div>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Product Title
                </label>
                <textarea
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  required
                  rows={1} // Adjust the number of rows as needed
                />
              </div>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Select Your Image</Form.Label>
                <input
                  type="file"
                  onChange={setimgfile}
                  name="photo"
                  placeholder=""
                  className="form-control auto-resize"
                  required
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
                <Form.Label>Product Categories</Form.Label>
                <select aria-label="Default select example"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  placeholder="Select a category"
                  name="categories"
                  className="form-control auto-resize"
                  required
                >
                  {categories && categories?.map((c) => (
                    <option key={c._id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Form.Group>



              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  How Much Funded : (%)
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="backers"
                  onChange={(e) => setBackers(e.target.value)}
                  value={backers}
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Add Backers Fund
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="funded"
                  onChange={(e) => setFunded(e.target.value)}
                  value={funded}
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Total fund required
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="totalFund"
                  onChange={(e) => setTotalFund(e.target.value)}
                  value={totalFund}
                  min="1"
                  required
                />
              </div><div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  How much fund raised till now
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="fundRaised"
                  onChange={(e) => setFundRaised(e.target.value)}
                  value={fundRaised}
                  min="1"
                  required
                />
              </div><div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Assets Value
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="assetvalue"
                  onChange={(e) => setAssetvalue(e.target.value)}
                  value={assetvalue}
                  min="1"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Minimum Investment
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="minInvestment"
                  onChange={(e) => setMinInvestment(e.target.value)}
                  value={minInvestment}
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Rental Yield
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="rentalYield"
                  onChange={(e) => setRentalYield(e.target.value)}
                  placeholder=""
                  value={rentalYield}
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Target IRR
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="targetIRR"
                  onChange={(e) => setTargetIRR(e.target.value)}
                  placeholder=""
                  value={targetIRR}
                  min="1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Target Multiple
                </label>
                <input
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="number"
                  name="targetMultiple"
                  onChange={(e) => setTargetMultiple(e.target.value)}
                  placeholder=""
                  value={targetMultiple}
                  min="1"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Location Name
                </label>
                <textarea
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="text"
                  name="locationName"
                  onChange={(e) => setLocationName(e.target.value)}
                  placeholder=""
                  rows={2}
                  value={locationName} // Adjust the number of rows as needed
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Location Description
                </label>
                <textarea
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="text"
                  name="locationDesc"
                  onChange={(e) => setLocationDesc(e.target.value)}
                  placeholder=""
                  rows={15}
                  value={locationDesc}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Overview
                </label>
                <textarea
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="text"
                  name="overview"
                  onChange={(e) => setOverview(e.target.value)}
                  placeholder=""
                  rows={10}
                  value={overview}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Tenancy Description
                </label>
                <textarea
                  onInput={handleAutoResize} // Call the auto-resize function
                  className="form-control auto-resize"
                  type="text"
                  name="tenancy"
                  onChange={(e) => setTenancy(e.target.value)}
                  placeholder=""
                  as="textarea" rows={8}
                  value={tenancy}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>

            </form>
            <div>
              {loading ? (
                <div className={style.spinner}>
                  <h4>Please wait......</h4>{" "}
                  <img
                    src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                    alt="barspinner"
                  />{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <ToastContainer />
        </div>
        <RightSide />
      </div>

    </div>
  );
};

export default CreateProducts2;
