import React from 'react';
//import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import styles from './header.module.css'; // Custom CSS for styling the header

function Header() {
  return (
    <header>
      <div className="logo">
        <h1 className={styles.Title}>🔥Fireplace Palace</h1>
      </div>
    </header>
  );
}

export default Header;