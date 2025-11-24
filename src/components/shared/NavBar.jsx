"use client";

import { useState } from "react";
import Link from "next/link";
import LoginBtn from "../shared/LoginBtn";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/provider/AuthProvider";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  const {user}=useAuth()
  console.log(user)

  const links = [
    { name: "Home", href: "/" },
    { name: "All Cars", href: "/all-cars" },
  ];

  return (
    <nav className="fixed py-2 border-b border-white/5 top-0 left-0 w-full bg-[#0a0a0a]/70 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-12/11 mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <Image
            src="/assets/logo.png"
            alt="CarXpress Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-[#666666] md:flex gap-8 text-[14px] font-medium">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                 className={`transition-colors hover:text-[#ededed] ${
                  pathname === item.href ? "text-[#ededed]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link href="/login" className="">
            <LoginBtn />
          </Link>
          <Link
            href="/register"
            className="btn hover:bg-gray-300 duration-300 bg-[#ededed] text-sm text-[#191919] rounded-lg font-medium"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(true)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-Over Menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 w-72 h-full bg-[#0a0a0a] shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="mb-8">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                   className={`transition-colors ${
                  pathname === item.href ? "text-[#ededed]" : "text-[#666666]"
                }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/login"
                className="px-4 py-2 border rounded-md text-center"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-[#ededed] text-black font-medium! rounded-md text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
