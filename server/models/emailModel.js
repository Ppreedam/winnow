import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now, // Set the default value to the current date when creating a new document
  },
});

export default mongoose.model("email", emailSchema);
