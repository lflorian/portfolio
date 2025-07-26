import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-8">
            <Link href='/' className="nav-item">
                Home
            </Link>
            <Link href='/projects' className="nav-item">
                Projects
            </Link>
            <Link href='/blog' className="nav-item">
                Blog
            </Link>
        </nav>
      </div>
    </header>
    )
};
