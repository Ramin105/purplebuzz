import React from "react";
import styles from "./Header.module.css";
import { FaBuilding } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" ,}}>
        <FaBuilding />
        <h1>
          Purple <span style={{ color:'#5432c2' }}>Buzz</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Work</h2>
        <h2>Pricing</h2>
        <h2>Contact</h2>
      </div>
      <div
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
          <CiBellOn style={{color:'#5432c2'}} />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "22px",
          }}
        >
          <CiSettings style={{color:'#5432c2'}}/>
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "22px",
          }}
        >
          <CiUser style={{color:'#5432c2'}} />
        </button>
      </div>
    </div>
  );
};

export default Header;
