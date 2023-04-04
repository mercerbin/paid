import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    comment: String,
});

const Reality = mongoose.model("infos", userSchema);

export default Reality;