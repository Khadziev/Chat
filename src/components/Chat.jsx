import React from 'react';
import Add from  '../img/add.png'
import More from '../img/more.png'
import Cam from  '../img/cam.png'
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Илез</span>
                <div className="chatIcons">
                    <img src= {Cam} alt='' />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxl2Nf4fQtL3CxjKLKmZ4DfCKs-qPKONdXdOll4uSwg&s" alt=""/>
                </div>

            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;