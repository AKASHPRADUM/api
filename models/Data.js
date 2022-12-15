import mongoose from "mongoose";
const DataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  Demo: {
    type: String,
    required: true,
  },
  responsive: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model("Data", DataSchema)