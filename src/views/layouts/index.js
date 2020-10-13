import React from 'react'
import styles from './styles.module.scss';

const Layout = ({ children }) => (<div className={styles.wrapper}>{children}</div>)

export default Layout;