"use client";

import { prata } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface LinkType {
  name: string;
  hash: string;
}

const Header = ({ locale }: { locale: string }) => {
  const [isClick, setIsClick] = useState(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    console.log(path, newLocale);
    router.push(`/${newLocale}/${path}`);
  };

  const links: LinkType[] = [
    { name: t("home"), hash: "#home" },
    { name: t("intro"), hash: "#introduction" },
    { name: t("detail"), hash: "#detail" },
    { name: t("story"), hash: "#story" },
    { name: t("rsvp"), hash: "#rsvp" },
    { name: t("gift"), hash: "#gift" },
  ];

  return (
    <div className={`${prata.className}`}>
      <nav className="bg-white bg-opacity-80 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">FromMinhThuWithLove</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    className="hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <select
                  value={locale}
                  onChange={handleLanguageChange}
                  className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
                >
                  <option value="en">EN</option>
                  <option value="vn">VN</option>
                </select>
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <select
                value={locale}
                onChange={handleLanguageChange}
                className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="vn">VN</option>
              </select>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  className="block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
