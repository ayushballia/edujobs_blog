"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" flex gap-4 py-4 justify-center">
        <li>
          <Link
            className={`link ${
              pathname === "/" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`capitalize link ${
              pathname === "/about-us" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/about-us"
          >
            about us
          </Link>
        </li>
        <li>
          <Link
            className={`capitalize link ${
              pathname === "/job-application-form" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/job-application-form"
          >
            job application form
          </Link>
        </li>
        <li>
          <Link
            className={`capitalize link ${
              pathname === "/job-table" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/job-table"
          >
            job Table
          </Link>
        </li>
        <li>
          <Link
            className={`capitalize link ${
              pathname === "/get-in-touch" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/get-in-touch"
          >
            Get in touch
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}