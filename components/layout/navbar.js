import Link from 'next/link';
import styles from './main-header.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">ShopFlow</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/people">People</Link>
          </li>
          <li>
            <Link href="/opportunities">Opportunities</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li>
            <Link href="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
