import Link from "next/link";

export default function NavBar() {
  return ( 
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Profile" className="text-white">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/Dashboard" className="text-white">
            Dashboard
          </Link>
        </li>
        {/* <li>
          <Link href="/Goal" className="text-white">
            Goal
          </Link>
        </li> */}
        {/* <li>
          <Link href="/Wallet" className="text-white">
            Wallet
          </Link>
        </li>
        <li>
          <Link href="/Analytics" className="text-white">
            Analytics
          </Link>
        </li>
        <li>
          <Link href="/Budget" className="text-white">
            Budget
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
