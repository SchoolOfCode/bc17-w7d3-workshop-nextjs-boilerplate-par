import React from 'react';
import styles from './hero.module.css';// Assuming you have a CSS file for styling


function Hero() {
  return (
    <header className={styles.heroheader}>
      <section className={styles.hero}>
        <h1>Discover the Perfect Fireplace for Your Home</h1>
        <p>Book a Consultation: <a href="/bookings">Fill in this form 📝 </a></p>
        {/* <button onClick={() => alert('Booking consultation...')}>Book Now</button> */}
      </section>
    </header>
  );
}

export default Hero;