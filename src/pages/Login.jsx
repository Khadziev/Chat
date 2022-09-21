import React from 'react';

function Login (props) {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Чат</span>
                <span className="title">Регистрация</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="пароль"/>
                    <button>Регистрация</button>
                </form>
                <p>
                    У вас нет учетной записи?
                </p>
            </div>
        </div>
    );
}

export default Login ;