import React , { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import navbar from './icons/menubar-icon.svg';
import close from './icons/close-icon.svg';
import styles from '../styles/Header.module.css';
import Resume from '../MyResume.pdf';

function Header() {
  const [expanded, setExpand] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.left__side}>
        <Link to='/'><h1>H.Soleimani Dev</h1></Link>
      </div>
      <div className={styles.right__side}>
        <nav className={styles.nav}>
            <Link to='aboutme'><span className={styles.span}>About Me</span></Link>
            <Link to='myworks'><span className={styles.span}>My Works</span></Link>
            <Link to='whatido'><span className={styles.span}>What I Do</span></Link>
            {/* download resume here */}
            <Link 
              to={Resume} 
              target='_blank'
              download="H.Soleimani-Resume.pdf"
              rel="noreferrer"
              >
              <span className={styles.span}>Download My Resume</span>
              </Link>
        </nav>
        <Outlet />
      </div>
      
        <div className={styles.menubar__container}>
         <img 
          onClick={()=> setExpand(!expanded)}
          className={styles.nav__img} src={expanded ? close : navbar} alt='navbar-icons'/>
          
          { expanded && 
            <div className={styles.burgernav}>
              <li><Link to="/">About Me</Link></li>
              <li><Link to="myworks">My Works</Link></li>
              <li><Link to="whatido">What I Do</Link></li>
              <li>
                <Link 
                  to={Resume} 
                  target='_blank'
                  download="H.Soleimani-Resume.pdf"
                  rel="noreferrer">Download My Resume
                </Link>
              </li>
            </div>
          }
        <Outlet />
        </div>
    </div>
  )
}

export default Header
