import { chat } from "../models/index.js";

const getDocs = (socket, token) => {
    chat.find({ toid: token.email }, { _id: 0, user: 1, lastMessage: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("takeMessage", docs);
            }
        })

};

export default getDocs