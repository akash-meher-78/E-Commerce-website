import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import axios from 'axios';
import { ChevronDown, MapPin, ShoppingCart } from 'lucide-react';
import { React, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

const navItem = [
  { title: "Home", route: "/home" },
  { title: "About", route: "/about" },
  { title: "Product", route: "/product" },
  { title: "Contact", route: "/getInTouch" },
];

function Navbar({locations}) {

  return (
    <>
      <div className='bg-white py-3 shadow-2xl'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          {/* logo Section */}
          <div className='flex gap-7 items-center'>
            <Link to={"/"}>
              <h1 className='font-bold font-mono text-3xl'>Shoplify</h1>
            </Link>

            <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
              <MapPin className='text-red-500' />
              <span className='font-semibold'>{location ? <div className='-space-y-2'>
                {/* <p>{locations.county}</p> */}
                {/* <p>{locations.state}</p> */}
              </div> : "Add Address"}</span>
              <ChevronDown />
            </div>
          </div>

          {/* Menu Section */}
          <nav className='flex items-center gap-7'>
            <ul className='flex gap-7 items-center text-xl font-semibold'>
              {navItem.map((item, key) =>
                item.route ? (
                  <NavLink
                    key={key}
                    to={item.route}
                    className={({ isActive }) =>
                      `${isActive ? "border-b-4 border-red-500" : "text-black"} cursor-pointer`
                    }
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <a
                    key={key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                )
              )}
            </ul>

            <Link to={"/cart"} className='relative'>
              <ShoppingCart className='h-7 w-7' />
              <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>0</span>
            </Link>

            <div>
              <SignedOut>
                <SignInButton  className = "bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer"/>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar;