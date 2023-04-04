import { info } from "../models/index.js";

const addShop = (socket, data) => {
    var doc = new info(data);

    doc.save().then(function (data) {
        if (data) {
            socket.emit('InfoAccept', {
                message: 'Added Successfully'
            });
        }
    });

};

export default addShop