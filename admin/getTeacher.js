import { teachers } from "../models/index.js";

const getTeacher = (socket) => {

    teachers.find({}, { _id: 0, email: 1, name: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("takeTeacher", docs);
            }
        })

};

export default getTeacher