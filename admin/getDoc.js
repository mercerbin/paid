import { docs } from "../models/index.js";

const getDocs = (socket) => {

    docs.find({}, { _id: 0, email: 1, name: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("takeDocs", docs);
            }
        })

};

export default getDocs