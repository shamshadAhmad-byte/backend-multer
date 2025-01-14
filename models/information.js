import mongoose from "mongoose";
const { Schema } = mongoose;
const informationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
});
const information =
  mongoose.models.information ||
  mongoose.model("information", informationSchema);
export default information;
