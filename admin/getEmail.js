import { users } from "../models/index.js";

const getEmail = (socket) => {

    users.find({ "role": "user" }, { _id: 0, email: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("takeEmails", docs);
            }
        })

};

export default getEmail