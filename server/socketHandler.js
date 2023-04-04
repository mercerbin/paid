import { io } from "./server.js";
import { login, register, confirmEmail, forgotPass, newPass, resendCode } from '../user/index.js'
import getEmail from "../admin/getEmail.js";
import addDoc from "../admin/addDoc.js"
import getDocs from "../admin/getDoc.js"
import addTeacher from "../admin/addTeacher.js";
import getTeacher from "../admin/getTeacher.js"
import addInfo from "../admin/addInfo.js"
import getInfo from "../admin/getInfo.js"
import getMessage from "../doctor/getMessage.js"
import getMessages from "../doctor/getMessages.js"
import sendMessage from "../doctor/sendMessage.js";

const socketHandler = () => {
  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on('login', (token) => {
      login(socket, token)
    })

    socket.on('register', (token) => {
      register(socket, token)
    })

    socket.on('confirmEmail', (token) => {
      confirmEmail(socket, token)
    })

    socket.on('forgotPass', (token) => {
      forgotPass(socket, token)
    })

    socket.on('newPass', (token) => {
      newPass(socket, token)
    })

    socket.on('resendCode', (token) => {
      resendCode(socket, token)
    })

    socket.on("disconnect", () => {
      console.log("User disconnected: ", socket.id);
    });


    socket.on("getEmails", () => {
      getEmail(socket)
    });

    socket.on("addDoc", (token) => {
      addDoc(socket, token)
    });

    socket.on("getDocs", (token) => {
      getDocs(socket, token)
    });

    socket.on("addTeacher", (token) => {
      addTeacher(socket, token)
    });

    socket.on("getTeacher", (token) => {
      getTeacher(socket, token)
    });

    socket.on("addInfo", (token) => {
      addInfo(socket, token)
    });

    socket.on("getInfo", (token) => {
      getInfo(socket, token)
    });

    socket.on("getMessage", (token) => {
      getMessage(socket, token)
    });

    socket.on("getMessages", (token) => {
      getMessages(socket, token)
    });
    socket.on("sendMessage", (token) => {
      sendMessage(socket, token)
    });

  })

}

export default socketHandler