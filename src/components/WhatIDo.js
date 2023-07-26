import React from 'react'
import styles from '../styles/WhatIDo.module.css';

function WhatIDo() {
  return (
    <div className={styles.container}>
      <img className={styles.html}  src='/icons/html-icon.svg' alt='icon'/>
      <img className={styles.css} src='/icons/css-icon.svg' alt='icon'/>
      <img className={styles.js} src='/icons/js-icon.svg' alt='icon'/>
      <img className={styles.figma} src='/icons/figma-icon.svg' alt='icon'/>
      <img className={styles.uiux} src='/icons/uiux-icon.svg' alt='icon'/>
      <img className={styles.firebase} src='/icons/firebase-icon.svg' alt='icon'/>
      <img className={styles.react} src='/icons/react-icon.svg' alt='icon'/>
    </div>
  )
}

export default WhatIDo
