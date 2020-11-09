import React from 'react'

import styles from './Wrapper.module.scss'

const Wrapper: React.FC<WrapperProps> = ({ children, classNames = [] }) => {
  const classes = classNames.map(className => styles[className]).join(' ')

  return <div className={`${styles.wrapper} ${classes}`}>{children}</div>
}

export default Wrapper
