import { teachers, users } from "../models/index.js";

import mail from "../mailer/mail.js";

const addTeacher = (socket, data) => {
    var doc = new teachers(data);

    teachers.findOne({ "email": data.email }, null, (err, data) => {
        if (data) {
            return socket.emit('DocError', err || {
                message: "Email Already Exists"
            });
        } else {
            doc.save().then(function (data) {
                if (!err) {
                    users.updateOne({ "email": data.email }, { "role": "teacher" }, (err, data) => {
                        if (!err) {
                            mail(data.email, null, "Teacher Confirmed", "Your Teacher Account has Been Created")
                            socket.emit('TeacherAccept', {
                                message: 'Added Successfully'
                            });
                        }
                    })
                }
            });
        }
    });

};

export default addTeacher