import React from 'react';

function Registr(props) {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Чат</span>
                <span className="title">Регистрация</span>

                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file"/>
                <button>Войти</button>
                <p>
                    У вас есть аккаунт?
                </p>
            </div>
        </div>
);
}

export default Registr;