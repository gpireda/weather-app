import React from 'react'

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => (
  <button className={styles.button} disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

export default Button
