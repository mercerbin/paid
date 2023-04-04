import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    school: String,
    quali: String,
});

const Reality = mongoose.model("teachers", userSchema);

export default Reality;