import React from 'react'

import styles from './Section.module.scss'

const Section: React.FC = ({ children }) => <section className={styles.section}>{children}</section>

export default Section
