import React from "react";
import styles from "./Contact.module.css";
import { FaRegNewspaper } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
const Contact = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "70%" }}>
        <div className={styles.section1}>
          <div className={styles.left}>
            <h1>Contact</h1> <h3>Elit, sed do eiusmod tempor</h3>
            <p>
              Vector illustration is from StorySet. Incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className={styles.right}>
            <img
              src="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/banner-img-01.svg
"
              alt=""
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div>
            <h1>Create success campaign with us!</h1>
            <h3>Elit, sed do eiusmod tempor</h3>
            <p style={{ opacity: "0.5", width: "60%" }}>
              Incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
            <div>
              <div className={styles.leftsecond}>
                <div style={{display:'flex', gap:'10px'}}>
                  <div className={styles.icondiv}><FaRegNewspaper style={{fontSize:'35px'}} /></div>
                  <div><h3>Media Contact</h3>
                  <p style={{opacity:'0.6'}}>
                    Mr. John Doe <br /> 010-020-0340
                  </p></div>
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                  <div className={styles.icondiv}><MdComputer style={{fontSize:'35px'}} /></div>
                  <div><h3>Media Contact</h3>
                  <p style={{opacity:'0.6'}}>
                    Mr. John Doe <br /> 010-020-0340
                  </p></div>
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                  <div className={styles.icondiv}><FaMoneyBill style={{fontSize:'35px'}} /></div>
                  <div><h3>Media Contact</h3>
                  <p style={{opacity:'0.6'}}>
                    Mr. John Doe <br /> 010-020-0340
                  </p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
