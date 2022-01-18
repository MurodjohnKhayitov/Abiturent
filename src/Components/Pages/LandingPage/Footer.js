import React from "react";
import styles from "../Css/Footer.module.css";
import { FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { ImMap2, ImYoutube } from "react-icons/im";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={styles.FooterMe}>
        <div className={styles.Bulim}>
          <h2>Biz Bilan Bog'lanish</h2>
          <ul>
            <li>
              <i>
                <FaPhoneAlt />
              </i>
              +99899-995-08-11
            </li>
            <li>
              <i>
                <GoMail />
              </i>
              murodillaxayitov@gmail.com
            </li>
            <li>
              <i>
                <ImMap2 />
              </i>
              Toshkent Sh, Shayhontoxur Tum, Samarqand Darvoza Ko'chasi 4-uy.
            </li>
          </ul>
        </div>
        <div className={styles.Bulim}>
          <h2>Ijtimoiy Tarmoqlar</h2>
          <ul>
            <li>
              <i>
                <BsFacebook />
              </i>
              FaceBook
            </li>
            <li>
              <i>
                <BsInstagram />
              </i>
              Instagram
            </li>
            <li>
              <i>
                <ImYoutube />
              </i>
              YouTube
            </li>
            <li>
              <i>
                <FaTelegram />
              </i>
              Telegram
            </li>
          </ul>
        </div>
        <div className={styles.Bulim}>
          <h2>Bizning Bo'limlar</h2>
          <div className={styles.LinkFooter}>
            <p>
              <a href="/">Foydalanish shartlari</a>
            </p>
            <p>
              <a href="/">Fanlar</a>
            </p>
            <p>
              {" "}
              <a href="/"> Test topshirish</a>
            </p>{" "}
            <p>
              <a href="/">Biz haqimizda</a>
            </p>
          </div>
        </div>
      </div>
      <p className={styles.imho}>
        2022 -ShC Forever. Barcha huquqlar himoyalangan
      </p>
    </>
  );
}
