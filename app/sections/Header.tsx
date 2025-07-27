import Link from 'next/link';
import { StaggeredAnimation } from '../components/StaggeredAnimation';

export const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-8">
          <StaggeredAnimation 
            animation="fadeLeft" 
            staggerDelay={100}
            duration={400}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-item">
                {link.label}
              </Link>
            ))}
          </StaggeredAnimation>
        </nav>
      </div>
    </header>
  );
};
