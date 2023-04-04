import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    from: String,
    to: String,
    text: String,
    createdAt: Date,
    user: {
        id: String,
        name: String,
    },
});

const Reality = mongoose.model("messages", userSchema);

export default Reality;