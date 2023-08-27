import React, { useEffect, useState } from 'react';
import "./ProductEdit.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const ProductEdit = ({ onClose, productdata, getAllProducts }) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("")
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");
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

  useEffect(() => {
    setId(productdata._id)
    setFName(productdata.fname)
    setFunded(productdata.funded);
    setTotalFund(productdata.totalFund);
    setFundRaised(productdata.fundRaised);
    setCategory(productdata.categories);
    setAssetvalue(productdata.assetvalue);
    setMinInvestment(productdata.minInvestment);
    setRentalYield(productdata.rentalYield);
    setTargetIRR(productdata.targetIRR);
    setTargetMultiple(productdata.targetMultiple);
    setLocationName(productdata.locationName);
    setLocationDesc(productdata.locationDesc);
    setOverview(productdata.overview);
    setTenancy(productdata.tenancy);
  }, [productdata]);

  const handleSubmit = async (e) => {
    console.log("start working")
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.put(`http://localhost:8000/api/v1/product/update-product/${id}`, {
        fname,
        funded,
        totalFund,
        fundRaised,
        categories: category,
        assetvalue,
        minInvestment,
        rentalYield,
        targetIRR,
        targetMultiple,
        locationName,
        locationDesc,
        overview,
        tenancy,
      });

      if (data?.errro) {
        setLoading(false)
        toast.error(data?.error);
        // console.log(data)
      } else {
        setLoading(false)
        getAllProducts()
        onClose();
        toast.success("Profile Updated Successfully");
        // console.log(data)
      }
    } catch (error) {
      // console.log(error);
      setLoading(false)
      toast.error("Something went wrong");
    }
  };

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://156.67.221.116:8000/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fname">Product Title:</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
              className="form-control"
              id="fname"
              placeholder="Enter Product Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="file">Select Your Image:</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="form-control"
              id="file"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="funded">Add Backers Fund:</label>
            <input
              type="number"
              value={funded}
              onChange={(e) => setFunded(e.target.value)}
              className="form-control"
              id="funded"
              placeholder="Enter fund amount"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalFund">Total Fund Required:</label>
            <input
              type="number"
              value={totalFund}
              onChange={(e) => setTotalFund(e.target.value)}
              className="form-control"
              id="totalFund"
              placeholder="Enter total fund required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fundRaised">How Much Fund Raised:</label>
            <input
              type="number"
              value={fundRaised}
              onChange={(e) => setFundRaised(e.target.value)}
              className="form-control"
              id="fundRaised"
              placeholder="Enter fund raised amount"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categories">Product Categories:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              id="categories"
            >
              {categories.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="assetvalue">Assets Value:</label>
            <input
              type="number"
              value={assetvalue}
              onChange={(e) => setAssetvalue(e.target.value)}
              className="form-control"
              id="assetvalue"
              placeholder="Enter asset value"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="minInvestment">Minimum Investment:</label>
            <input
              type="number"
              value={minInvestment}
              onChange={(e) => setMinInvestment(e.target.value)}
              className="form-control"
              id="minInvestment"
              placeholder="Enter minimum investment"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rentalYield">Rental Yield:</label>
            <input
              type="number"
              value={rentalYield}
              onChange={(e) => setRentalYield(e.target.value)}
              className="form-control"
              id="rentalYield"
              placeholder="Enter rental yield"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="targetIRR">Target IRR:</label>
            <input
              type="number"
              value={targetIRR}
              onChange={(e) => setTargetIRR(e.target.value)}
              className="form-control"
              id="targetIRR"
              placeholder="Enter target IRR"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="targetMultiple">Target Multiple:</label>
            <input
              type="number"
              value={targetMultiple}
              onChange={(e) => setTargetMultiple(e.target.value)}
              className="form-control"
              id="targetMultiple"
              placeholder="Enter target multiple"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="locationName">Location Name:</label>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="form-control"
              id="locationName"
              placeholder="Enter location name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="locationDesc">Location Description:</label>
            <input
              type="text"
              value={locationDesc}
              onChange={(e) => setLocationDesc(e.target.value)}
              className="form-control"
              id="locationDesc"
              placeholder="Enter location description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="overview">Overview:</label>
            <input
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              className="form-control"
              id="overview"
              placeholder="Enter overview"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tenancy">Tenancy Description:</label>
            <input
              type="text"
              value={tenancy}
              onChange={(e) => setTenancy(e.target.value)}
              className="form-control"
              id="tenancy"
              placeholder="Enter tenancy description"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            UPDATE
          </button>
        </form>
        <div>
          {loading ? (
            <div className="spinner">
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
  );
};

export default ProductEdit;
