import { text } from '../models/index.js'

const sendMessage = (socket, sdata) => {
    var texti = new text(sdata);

    try {
        texti.save().then(function (data) {
            socket.emit('messageAdded');
        });

    } catch (error) {
        console.log("Error creating user", error);
    }

}

export default sendMessage