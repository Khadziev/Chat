import React from 'react';
import Attach from  '../img/attach.png'
import Img from  '../img/img.png'

function Input() {
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Введите что-либо..."
            />
            <div className="send">
                <img src={Attach} alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Отправлять</button>
            </div>
        </div>
    );
}

export default Input;