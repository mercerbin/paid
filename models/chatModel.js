import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        id: String,
        name: String,
    },
    lastMessage: {
        id: String,
        text: String,
        createdAt: String,
    },
    toid: String,
});

const Reality = mongoose.model("chats", userSchema);

export default Reality;