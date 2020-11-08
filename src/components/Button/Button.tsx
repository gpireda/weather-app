import React from 'react'

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)

export default Button
