import React from "react";
import styles from "./Header.module.css";
import { FaBuilding, FaHamburger } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
        marginLeft: "15px",
        marginRight: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaBuilding />
        <h1>
          Purple <span style={{ color: "#5432c2" }}>Buzz</span>
        </h1>
      </div>
      <div
      className={styles.nav}
       
      >
        <button>Home</button>
        <button>About</button>
        <button>Work</button>
        <button>Pricing</button>
        <button>Contact</button>
      </div>
      <div
      className={styles.btns}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          marginTop: "6px",
        
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "22px",
          }}
        >
          <CiBellOn style={{ color: "#5432c2",opacity:'1' }} />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "22px",
          }}
        >
          <CiSettings style={{ color: "#5432c2", opacity:'1' }} />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "22px",
          }}
        >
          <CiUser style={{ color: "#5432c2" ,opacity:'1' }} />
        </button>
      </div>
      <GiHamburgerMenu className={styles.hamburger}/>
    </div>
  );
};

export default Header;
