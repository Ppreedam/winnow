import React from "react";
import style from "./LoginNavbar.module.css";
import bull from "./winnow.png";

const LoginNavbar = () => {
  return (
    <div className={style.navbar}>
      <a href="/">
        <img className={style.navImg} src={bull} />
      </a>
    </div>
  );
};

export default LoginNavbar;
