

import React from 'react';
import styles from './Demoligin.module.css';
import CollapsibleExample from '../Navbar/Navbar';

function Demoligin() {
  return (
    <>

    <CollapsibleExample />
    <img className={styles.bear} src={bear} />
    <div className={styles.login_container}>
      <h2 className={styles.login_title}>Login</h2>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter your email'/>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter your password'/>
      </div>
      <button className={styles.login_button}>Login</button>
    </div>
    </>
  );
}

export default Demoligin;
