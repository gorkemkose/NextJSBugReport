// components/layouts/Footer.js

import styles from '../styles/footer.module.css' // Adjust the import path
import classNames from 'classnames/bind';
import Logo from './Logo'
const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('footer', 'grid', 'grid-cols-6', 'gap-4')}>
        <div className={cx('leftDiv','col-span-2')}>
        {/* <img src="/images/Logo.svg" alt="Logo" /> */}
        <a href="/"><Logo color="white"/></a>
        <p className={styles.footerDesc}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
        </div>
        <div className= {cx('columns', 'grid', 'grid-rows-6', 'gap-3')}>
          <a href="#" className={styles.columnTitle}>Product</a>
          <a href="#" className={styles.columnText}>Features</a>
          <a href="#" className={styles.columnText}>Pricing</a>
          <a href="#" className={styles.columnText}>Case Studies</a>
          <a href="#" className={styles.columnText}>Updates</a>
        </div>
        <div className= {cx('columns', 'grid', 'grid-rows-6', 'gap-3')}>
          <a href="#" className={styles.columnTitle}>Company</a>
          <a href="#" className={styles.columnText}>About</a>
          <a href="#" className={styles.columnText}>Contact us</a>
          <a href="#" className={styles.columnText}>Culture</a>
          <a href="#" className={styles.columnText}>Blog</a>
        </div>
        <div className= {cx('columns', 'grid', 'grid-rows-6', 'gap-3')}>
          <a href="#" className={styles.columnTitle}>Support</a>
          <a href="#" className={styles.columnText}>Help Center</a>
          <a href="#" className={styles.columnText}>Server Status</a>
          <a href="#" className={styles.columnText}>Report a bug</a>
          <a href="#" className={styles.columnText}>Chat support</a>
        </div>
        <div className= {cx('columns', 'grid', 'grid-rows-6', 'gap-3')}>
          <a href="#" className={styles.columnTitle}>Downloads</a>
          <a href="#" className={styles.columnText}>IOS</a>
          <a href="#" className={styles.columnText}>Android</a>
          <a href="#" className={styles.columnText}>Mac</a>
          <a href="#" className={styles.columnText}>Chrome</a>
        </div>
    </footer>
  )
}

export default Footer
