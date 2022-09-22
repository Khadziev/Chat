import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Login(props) {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Чат</span>
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="пароль" />
          <button>Регистрация</button>
          {err && <span>Что-то пошло не так</span>}
        </form>
        <p>
          У вас нет учетной записи? <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
