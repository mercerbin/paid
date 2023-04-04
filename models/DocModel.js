import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    hospital: String,
    time: { type: String, default: "" },
});

const Reality = mongoose.model("docs", userSchema);

export default Reality;