import React from "react";
import styles from "./Home.module.css";
import { IoIosGift } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
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
        <section className={styles.section5}>
          <FaBoxOpen style={{ fontSize: "45px", color: "white" }} />
          <div>
            <h2>Great transformations successful</h2>
            <p>Quis ipsum suspendisse ultrices gravida.</p>
          </div>
          <button>View Our Work</button>
        </section>
        <section className={styles.section6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {" "}
            <div>
              <h1>Recent Works</h1>
            </div>
            <div className={styles.cards2}>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardcover2}>
                  <h1>Social media</h1>
                  <p>Ullamco laboris nisi ut aliquip ex</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className={styles.footer1}>
            <h2>
              <FaBuilding /> Purple Buzz
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className={styles.icons}>
              <FaBoxOpen
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  fontSize: "25px",
                  color: "#6266EA",
                }}
              />
              <FaBoxOpen
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  fontSize: "25px",
                  color: "#6266EA",
                }}
              />
              <FaBoxOpen
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  fontSize: "25px",
                  color: "#6266EA",
                }}
              />
              <FaBoxOpen
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  fontSize: "25px",
                  color: "#6266EA",
                }}
              />
              <FaBoxOpen
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  fontSize: "25px",
                  color: "#6266EA",
                }}
              />
            </div>
          </div>

          <div className={styles.footer2}>
            <h2>Our Company</h2>
            <p>Home</p>
            <p>About us</p>
            <p>Work</p>
            <p>Price</p>
            <p>Contact</p>
          </div>
          <div className={styles.footer2}>
            <h2>Our Works</h2>
            <p>Branding</p>
            <p>Business</p>
            <p>Marketing</p>
            <p>Social Media</p>
            <p>Digital Solution</p>
            <p>Graphic</p>
          </div>
          <div className={styles.footer2}>
            <h2>For Client</h2>
            <p>010-020-0340</p>
            <p>info@company.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
