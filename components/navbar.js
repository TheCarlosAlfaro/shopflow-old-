import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <h1>This is the navbar</h1>
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
    </div>
  );
}
