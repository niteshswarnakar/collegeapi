import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  prog: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const RequestModel = mongoose.model("RequestModel", requestSchema);
export default RequestModel;
