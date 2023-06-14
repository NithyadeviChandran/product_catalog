import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={`main ${styles.nav}`}>
        <Link to ='/products'>Our catalogue</Link>
        <Link to ='/contact'>Contact Us</Link>
    </div>
  )
}

export default Header