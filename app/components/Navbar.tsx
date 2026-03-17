"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const pageBg: Record<string, { bg: string; fg: string }> = {
  "/about":   { bg: "#BCEDFF", fg: "#161616" },
  "/projects":{ bg: "#F97D67", fg: "#1a1a1a" },
  "/contact": { bg: "#292B4F", fg: "#e8e8f0" },
};

export default function Navbar() {
  const pathname = usePathname();
  const theme = pageBg[pathname] ?? { bg: "#161616", fg: "#f0ede8" };

  return (
    <nav
      className="navbar"
      style={{ background: theme.bg, color: theme.fg }}
    >
      <Link href="/" className="navbar-name" style={{ color: theme.fg }}>
        Seyeon Kim
      </Link>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`navbar-link ${pathname === link.href ? "active" : ""}`}
              style={{ color: theme.fg }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
