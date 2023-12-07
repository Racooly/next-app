import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

function Button() {
  return (
    <Link href={'/'}>
        <button className={styles.button}>test button</button>
    </Link>
    )
}

export default Button