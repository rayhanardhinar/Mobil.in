import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6 2xl:max-w-[1400px]">
        <h1 className="text-2xl font-bold">Mobil.in</h1>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
