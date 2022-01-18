import React, { useState, useContext } from "react";
import styles from "../Css/Authen.module.css";
import { Container, Button } from "react-bootstrap";
import SignUpImg from "../../Img/signup.png";

export default function Autentication(props) {
  const [click, setClick] = useState(true);

  const [signNumber, setSignNumber] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [number, setNumber] = useState("");
  const [passwordd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const SignUp = () => {
    setClick(false);
  };
  const SignIn = () => {
    setClick(true);
  };
  const login = (e) => {
    e.proventDefault();
  };

  return (
    <div className={styles.AuthenGroup}>
      <Container>
        <div className={styles.Registration}>
          <div className={styles.RegistrationForm}>
            {click ? (
              <div className={styles.loginCotnainer}>
                <div className={styles.login_box}>
                  <p>Tizimga Kirish</p>

                  <form onSubmit={login}>
                    {" "}
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Telefon Raqam
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+998"
                        required
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Parolni Kiriting
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="parol"
                        required
                      />
                    </div>
                    <button className={styles.SignInFormButton}>Kirish</button>
                    <span className={styles.SpanPassword}>
                      Parolingizni unutdingizmi ?
                    </span>
                  </form>
                </div>
                <div className={styles.loginFooter}>
                  <span>Yangi foydalanuvchimisiz ? </span>
                  <p onClick={SignUp}>Ro'yxatdan o'tish</p>
                </div>
              </div>
            ) : (
              <div className={styles.loginCotnainer}>
                <div className={styles.login_box}>
                  <p>Ro'yxatdan o'tish</p>

                  <form onSubmit={login}>
                    {" "}
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Telefon Raqam
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+998 (99)-777-77-77"
                        required
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Parolni Kiriting
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="parol"
                        required
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Parolni Tasdig'i
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="parol tastig'i"
                        required
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Ismingizni Kiriting
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ismingizni kiriting"
                        required
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label className="form-control-label">
                        Familiyangizni kiriting
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Familiyangizni  kiriting"
                        required
                      />
                    </div>
                    <button className={styles.SignInFormButton}>
                      Ro'yxatdan o'tish
                    </button>
                    <span className={styles.SpanPassword}>
                      Parolingizni unutdingizmi ?
                    </span>
                  </form>
                </div>
                <div className={styles.loginFooter}>
                  <span>Men allaqchon ro'yhatdan o'tgnanman</span>
                  <p onClick={SignIn}>Kirish</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.RegistrationImg}>
            <img src={SignUpImg} className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
}
