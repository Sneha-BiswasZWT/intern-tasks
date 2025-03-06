import Link from "next/link";

export default function Navbar() {
  // Capitalized component name
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="py-6 px-20 flex flex-wrap justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-32" />
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600 transition">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
