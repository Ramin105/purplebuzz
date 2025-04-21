import React from "react";
import styles from "./Home.module.css";
import { IoIosGift } from "react-icons/io";
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.cover}>
            <h1>Cupidatat non proident, sunt in culpa qui officia</h1>
            <div className={styles.blueborder}></div>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </p>
            <button> Get Started</button>
          </div>
        </section>
        <section className={styles.section2}>
          <div style={{ marginBottom: "30px" }}>
            <h1>Services</h1>
          </div>
          <div className={styles.description}>
            <div className={styles.left}>
              {" "}
              <IoIosGift
                style={{
                  fontSize: "25px",
                  marginBottom: "100px",
                  marginRight: "8px",
                }}
              />{" "}
            </div>
            <div className={styles.right}>
              <h1>Make Success for future</h1>
              <div className={styles.blueborder}></div>{" "}
              <p>
                You are free to use this template for your commercial or
                business websites. You are not allowed to re-distribute this
                template ZIP file on any template collection websites. It is too
                easy to illegally copy and repost this template.
              </p>{" "}
            </div>
          </div>
        </section>
        <section className={styles.section3}>
          <div className={styles.buttoncontainer}>
            <button>All</button>
            <button>Graphics</button>
            <button>UI/UX</button>
            <button>Branding</button>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.cards}>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
            <div className={styles.card}>
              
              <div className={styles.cardcover}>
                <button>Social Media</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
