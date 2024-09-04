import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-black py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" prefetch={false}>
            <h1 className="text-white text-2xl font-bold">BookChan</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white btn btn-primary" prefetch={false}>
              Add Book
            </Link>
            <div className="relative">
              <input type="search" placeholder="Search books..." className="p-1 pr-8 rounded-md" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="svg-icon search-icon w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}

function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      <g className="search-path"
      fill="none" stroke="#848F91">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </g>
      </svg>
    )
  }

export default Header;
