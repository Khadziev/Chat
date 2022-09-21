import React from 'react';
import Add from '../img/add.png'

function Registr(props) {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Чат</span>
                <span className="title">Регистрация</span>
                <form>
                <input type="text" placeholder="ваше имя..."/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="пароль"/>
                <input required style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} alt=""/>
                    <span>Добавить фото</span>
                </label>
                <button>Войти</button>
                </form>
                <p>
                    У вас есть аккаунт?
                </p>
            </div>
        </div>
    );
}

export default Registr;