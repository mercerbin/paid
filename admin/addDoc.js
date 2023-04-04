import { docs, users } from "../models/index.js";

import mail from "../mailer/mail.js";

const addShop = (socket, data) => {
    var doc = new docs(data);

    docs.findOne({ "email": data.email }, null, (err, data) => {
        if (data) {
            return socket.emit('DocError', err || {
                message: "Email Already Exists"
            });
        } else {
            doc.save().then(function (data) {
                if (!err) {
                    users.updateOne({ "email": data.email }, { "role": "doctor" }, (err, data) => {
                        if (!err) {
                            mail(data.email, null, "Doctor Confirmed", "Your Doctor Account has Been Created")
                            socket.emit('DocAccept', {
                                message: 'Added Successfully'
                            });
                        }
                    })
                }
            });
        }
    });

};

export default addShop