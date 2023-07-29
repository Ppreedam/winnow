import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    imgpath: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    funded: {
        type: Number,
        required: true,
    },
    backers: {
        type: Number,
        required: true,
    },
    totalFund: {
        type: Number,
        required: true,
    },
    fundRaised: {
        type: Number,
        required: true,
    },
    categories: {
        type: String,
        required: true
    },
    assetvalue: {
        type: Number,
        required: true,
    },
    minInvestment: {
        type: Number,
        required: true,
    },
    rentalYield: {
        type: Number,
        required: true,
    },
    targetMultiple: {
        type: Number,
        required: true,
    },
    targetIRR: {
        type: Number,
        required: true,
    },
    locationName: {
        type: String,
        required: true,
    },
    locationDesc: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    tenancy: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);


// create model

const createProductModels = new mongoose.model("productNewData", userSchema);

export default createProductModels

