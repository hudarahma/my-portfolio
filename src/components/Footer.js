import React from 'react'
import styles from '../styles/Footer.module.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.h1}><h1>Contact me</h1></div>
      <div className={styles.icons}>
        <Link to='https://github.com/hudarahma?tab=repositories' target='_blank'>
            <img className={styles.github} src='/icons/github-icon.svg' alt='icon' />
        </Link>
        <Link to='mailto:huda.rahma2020@gmail.com' target='_blank'>
            <img className={styles.email} src='/icons/email-icon.svg' alt='icon' />
        </Link>
      </div>
      
    </div>
  )
}

export default Footer
