import { text } from '../models/index.js'

const getMessage = (socket, sdata) => {
    console.log(sdata)
    try {
        text.find({ from: sdata.email }, (err, data) => {
            if (data) {
                socket.emit("recieveMessage", data);
            }
        })

    } catch (error) {
        console.log("Error creating user", error);
    }

}

export default getMessage