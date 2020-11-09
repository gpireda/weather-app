import React from 'react'

import spinnerPath from './spinner.gif'

import styles from './Spinner.module.scss'

const Spinner = ({ height = 50 }: { height?: number }) => (
  <div className={styles['spinner-wrapper']} style={{ height: `${height}vh` }}>
    <img src={spinnerPath} alt='spinner' height='200px' width='200px' />
  </div>
)

export default Spinner
