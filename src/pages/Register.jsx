import React, { useState } from "react";
import Add from "../img/add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Создать пользователя
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Создайте уникальное имя изображения
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Обновить профиль
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //создать пользователя в firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //создавать пустые пользовательские чаты в firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Чат</span>
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ваше имя..." />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="пароль" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Добавить фото</span>
          </label>
          <button disabled={loading}>Войти</button>
          {loading && "Загрузка и сжатие изображения, пожалуйста, подождите..."}
          {err && <span>Что-то пошло не так</span>}
        </form>
        <p>У вас есть аккаунт? Логин</p>   <Link to="/register">Логин</Link>
      </div>
    </div>
  );
}

export default Register;
