import React from "react";
import styles from "../Css/Exam.module.css";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Exam() {
  return (
    <div className={styles.ExamGroup}>
      <Container>
        <div className={styles.Testname}>Free Test Topshirish</div>
        <div className={styles.ExamItem1}>
          <Card className={styles.Card}>
            <Card.Header className={styles.CardHeader}>
              Mavzuli testlar
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Tanlangan fanlardan mavzulashtirilgan yoki aralash testlarni
                ishlagan holda bilimingizni mustahkamlang. Savollar soni
                ixtiyoriy bo‘lib, natijalar test yakunida yoki test davomida
                ko‘rsatiladi. MASHG‘ULOT testlarini topshirish bepul.
              </Card.Text>
            </Card.Body>
            <hr />
            <ListGroup className="list-group-flush" id={styles.CardListGroup}>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Testni istalgan joyidan boshlash.
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Kerakli mavzulardan testlarni ishlash.
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Natijasini ko'rish imkoniyati ham bor.
              </ListGroupItem>
            </ListGroup>
            <Card.Footer className={styles.CardFooterGroup}>
              <NavLink to="/" className={styles.CardFooter}>
                Mashg'ulotni Boshlash
              </NavLink>
            </Card.Footer>
          </Card>
          <Card className={styles.Card}>
            <Card.Header className={styles.CardHeader}>
              Blokli testlar
            </Card.Header>
            <Card.Body>
              <Card.Text>
                30 ta test savolidan iborat blokli testlar DTM standartlari
                asosida professional repetitorlar tomonidan tuzilgan bo‘lib
                mavzularning ketma-ketligi va savollarning qiyinchilik darajasi
                kirish imtihonlaridagi testlar kabi tanlab olinadi. Blokli test
                topshirish bepul.
              </Card.Text>
            </Card.Body>
            <hr />
            <ListGroup className="list-group-flush" id={styles.CardListGroup}>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Bu test siz uchun juda foydali
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Testlarimiz DTM Standarti asosida
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Faqat Fan buyicha ishlay olasiz
              </ListGroupItem>
            </ListGroup>
            <Card.Footer className={styles.CardFooterGroup}>
              <NavLink to="/" className={styles.CardFooter}>
                Blokli testni ishlash
              </NavLink>
            </Card.Footer>
          </Card>
          <Card className={styles.Card}>
            <Card.Header className={styles.CardHeader}>
              Maxsus testlar
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Tanlangan fanlardan mavzulashtirilgan yoki aralash testlarni
                ishlagan holda bilimingizni mustahkamlang. Savollar soni
                ixtiyoriy bo‘lib, natijalar test yakunida yoki test davomida
                ko‘rsatiladi. MASHG‘ULOT testlarini topshirish bepul.
              </Card.Text>
            </Card.Body>
            <hr />
            <ListGroup className="list-group-flush" id={styles.CardListGroup}>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Testni istalgan joyidan boshlash.
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Kerakli mavzulardan testlarni ishlash.
              </ListGroupItem>
              <ListGroupItem id={styles.CardListGroup1}>
                <i>
                  <BsCheckLg className={styles.CardCheckIcon} />
                </i>
                Natijasini ko'rish imkoniyati ham bor.
              </ListGroupItem>
            </ListGroup>
            <Card.Footer className={styles.CardFooterGroup}>
              <NavLink to="/" className={styles.CardFooter}>
                Mashg'ulotni Boshlash
              </NavLink>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </div>
  );
}
