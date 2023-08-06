import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();
import multer from "multer"
// const multer = require("multer");
import createProductModels from "../models/CreateProductSchema.js"
import moment from "moment"

// multer code start
// img storage path
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads")
  },
  filename: (req, file, callback) => {
    callback(null, `imgae-${Date.now()}. ${file.originalname}`)
  }
})


// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true)
  } else {
    callback(new Error("only images is allowd"))
  }
}

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage
});

// / user register
router.post("/createProduct", upload.single("photo"), async (req, res) => {

  const { filename } = req.file;

  const { fname, funded, backers, totalFund, fundRaised, categories, assetvalue, minInvestment, rentalYield, targetMultiple, targetIRR, locationName, locationDesc, overview, tenancy } = req.body;

  // if (!filename && !fname && !funded && !backers && !totalFund && !fundRaised && !categories && !assetvalue && !minInvestment && !rentalYield && !targetMultiple && !targetIRR && !locationName && !locationDesc && !overview && !tenancy) {
  //   res.status(400).json({ status: 400, message: "fill all the data" })
  // }
  // console.log(filename,fname,funded,backers,totalFund,fundRaised,categories,assetvalue,minInvestment,rentalYield,targetMultiple,targetIRR,locationName,locationDesc,overview,tenancy)
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");
    const userdata = await new createProductModels({
      fname: fname,
      imgpath: filename,
      date: date,
      backers: backers,
      funded: funded,
      totalFund: totalFund,
      fundRaised: fundRaised,
      categories: categories,
      assetvalue: assetvalue,
      minInvestment: minInvestment,
      rentalYield: rentalYield,
      targetMultiple: targetMultiple,
      targetIRR: targetIRR,
      locationName: locationName,
      locationDesc: locationDesc,
      overview: overview,
      tenancy: tenancy
    }).save()

    // console.log("userdata", userdata)
    // const finaldata = await userdata.save();
    // console.log(finaldata)
    res.status(201).json({"msg":"Product created Successfully", status: 201, userdata });

  } catch (error) {
    res.status(401).json({ status: 401, error })
  }




});

// multer code End

//routes
router.post(
  "/create-product",
  // requireSignIn,
  // isAdmin,
  // formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  upload.single("photo"),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
