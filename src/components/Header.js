import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 px-8 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center space-x-4">
        <Link legacyBehavior href="/" passHref>
          {/* Link to the homepage */}
          <a className="flex items-center">
            <img
              src="https://img.icons8.com/?size=100&id=mEFUaHgcX2jJ&format=png&color=000000"  // Image link from Icons8
              alt="Logo"
              className="h-10"
            />
          </a>
        </Link>
      </div>

      {/* Navigation links on the right */}
      <nav className="flex items-center space-x-6">
        <Link legacyBehavior href="/mylist">
          <a className="text-gray-400 hover:text-white">My List</a>
        </Link>
        <Link legacyBehavior href="/login">
          <a className="text-indigo-400 hover:text-white">Login</a>
        </Link>
      </nav>
    </header>
  );
}
