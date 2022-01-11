import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Css/home.module.css";
export default function Home() {
  return (
    <div className={styles.HomeGroup}>
      <Container>
        <div className={styles.HomeItem1}>
          <div className={styles.HomeItem1Text}>
            <p>
              Sizning Do'stlarinigiz, o'quvchilaringiz yoki Abiturentlar uchun
              testlar to'plami!
            </p>
          </div>
          <div className={styles.HomeItem1Img}>
            <img
              src={
                "https://images.ctfassets.net/co0pvta7hzrh/5roupNBSYoApdl18d8FVOR/d00ac47d4c80d958219d93d20616549c/Math_Quiz_typeform.png?w=1360&fm=webp"
              }
              className="img-fluid"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
