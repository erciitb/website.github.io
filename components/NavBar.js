import styles from "./NavBar.module.scss"
import Link from 'next/link'
import { useState } from "react"

const NavBar=()=>{
  const [sidebar, setSidebar]= useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#home"><a>Home</a></Link></li>
          <li className={styles.buttons_view}><Link href="/blog"><a>Blog</a></Link></li>
          <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#events"><a>Events</a></Link></li>
          <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#ercteamdet"><a>Team Details</a></Link></li>
          <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#contact"><a>Contact Us</a></Link></li>
        </ul>
      </nav> 
      <div className={styles.navbar_mobile}>
        <div className={styles.hamburger_icon_block}>
          <button href="/" className={styles.hamburger_icon_button} onClick={showSidebar}>☰</button>
        </div>
        <nav className={sidebar ? styles.nav_menu_active : styles.nav_menu}>
          <ul className={styles.nav_menu_items} onClick={showSidebar}>
            <li className={styles.buttons_view}><Link href="#"><a>Close &times;</a></Link></li>
            <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#home"><a>Home</a></Link></li>
            <li className={styles.buttons_view}><Link href="/blog"><a>Blog</a></Link></li>
            <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#events"><a>Events</a></Link></li>
            <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#ercteamdet"><a>Team Details</a></Link></li>
            <li className={styles.buttons_view}><Link href="https://erciitb.github.io/#contact"><a>Contact Us</a></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar
