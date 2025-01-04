import Link from "next/link";

const links = [
  { name: "Chats", href: "/chats" },
  { name: "Profile", href: "/profile" },
];

export default function Sidenav() {
  return (
    <nav className="w-full h-full bg-blue-700">
      {links.map((link) => (
        <li
          className="mb-1 p-2 font-bold list-none text-gray-100 hover:bg-blue-500"
          key={link.name}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </nav>
  );
}
