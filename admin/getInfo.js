import { info } from "../models/index.js";

const getDocs = (socket) => {

    info.find({}, { _id: 0, name: 1, comment: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("takeInfo", docs);
            }
        })

};

export default getDocs