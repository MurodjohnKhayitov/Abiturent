import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import MathVik from "../../Img/Math.png";
import styles from "../Css/home.module.css";
import { BiTimer } from "react-icons/bi";
import Icon1 from "../../Img/Icon1.png";
import Icon2 from "../../Img/Icon2.png";
import Icon3 from "../../Img/Icon3.png";
import Icon4 from "../../Img/Icon4.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.HomeGroup}>
      <Container fluid>
        <div className={styles.HomeItem1}>
          <div className={styles.HomeItem1Text}>
            <h1>
              Abiturentlar, Talabalar shu bilan birga bilimini sinab ko'rmoqchi
              bo'lganlar uchun testlar to'plami!
            </h1>
            <p>
              Ko'p tanlovli test yoki onlayn imtihon yaratish va qiziqarli va
              qiziqarli tarzda o'rganishni ilhomlantirish uchun ushbu test
              ishlab chiqaruvchisidan foydalaning
            </p>
            <Button className={styles.TestRunButton} type="dark">
              Testni Boshlang
            </Button>
          </div>
          <div className={styles.HomeItem1Img}>
            <img src={MathVik} />
          </div>
        </div>
        <div className={styles.HomeItem2}>
          <div className={styles.HomeItem2Text1}>
            Nima uchun bizning tizimdan foydalanishingiz kerak ?
          </div>
          <div className={styles.HomeItem2Group}>
            <div className={styles.HomeItem2Text}>
              <img src={Icon1} className="img-fluid" />
              <h3>QISQA TESTLARNI ISHLASH</h3>
              <p>
                Testni ishlash va natijasini ko'rish juda oson. Siz sinovni
                boshlaysiz va testni yakunlaganingizdan keyin sizga natijlarni
                chiqarib beradi. Bu uz navbatida sizga ortiqcha harakat va
                harajatlarni tejashga imkon beradi va sizning statistikangizni
                ketma-ket yig'ib boradi.
              </p>
            </div>
            <div className={styles.HomeItem2Text}>
              {" "}
              <img src={Icon2} className="img-fluid" />
              <h3>Tizim haqida</h3>
              <p>
                Tizim online test ishlashga muljallangan va siz bu yerda
                bilimngizni sinab ko'rishingiz mumkin bo'ladi. Buning uchun
                Ruyxatdan o'tasiz va shaxsiy kabinetingizga kirasiz, u yerdan
                kerakli bo'limni.
              </p>{" "}
            </div>
            <div className={styles.HomeItem2Text}>
              {" "}
              <img src={Icon3} className="img-fluid" />
              <h3>Aqilli & interactive</h3>
              <p>
                Bu tizimda eng yuqori kursatgichli talabalar taqdirlanadi. Shu
                bilan birga har oy yangi statistika e'lon qilinadi. Yil ohirida
                esa umumiy kursatgich inobatga olinib eng yaxshi kursatgichli
                o'quvchi munosib taqdirlanadi.
              </p>{" "}
            </div>
            <div className={styles.HomeItem2Text}>
              {" "}
              <img src={Icon4} className="img-fluid" />
              <h3>Tezkor Hisobot</h3>
              <p>
                Siz ogohlantish bo'limini ishga tushirib quysangiz, Sizga doir
                bulgan har bir yangilikni utkazib yubormaysiz, shu bilan birga
                sizning shu vaqtgacha kursatgan natijangizni ham umumiy hisobot
                sifatida ko'rishingiz mumkin bo'ladi.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className={styles.HomeItem3}>
          <ul>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Matematika
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Fizika
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Informatika
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Tarix
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Ona Tili va Adabiyot
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Geografiya
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Kimyo
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Rus Tili
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Ingiliz TIli
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Fransuz TIli
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.LinkFanlar}>
                Nemis TIli
              </NavLink>
            </li>
            <li>
              
              <NavLink to="/" className={styles.LinkFanlar}>
                Biologiya
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
