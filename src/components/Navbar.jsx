import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart()
  const [openNav, setOpenNav] = useState(false)

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black py-4 shadow-lg px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-white">
              E-Commerce
            </h1>
          </Link>

          {/* Location */}
          <div className="md:flex gap-1 cursor-pointer text-gray-200 items-center hidden">
            <MapPin className="text-red-500" />
            <span className="font-medium">
              {location ? (
                <div className="-space-y-1">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>

          {openDropdown && (
            <div className="w-[260px] backdrop-blur-lg bg-white/10 text-white shadow-2xl z-50 fixed top-16 left-60 border border-gray-600 p-5 rounded-xl">
              <h1 className="font-semibold mb-4 text-lg flex justify-between">
                Change Location <span onClick={toggleDropdown}><CgClose /></span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                Detect my location
              </button>
            </div>
          )}
        </div>

        {/* Menu Section */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex gap-7 items-center text-lg font-medium hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-300"} hover:text-red-400 transition-all pb-1`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-300"} hover:text-red-400 transition-all pb-1`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-300"} hover:text-red-400 transition-all pb-1`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* Cart */}
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7 text-white" />
            <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>

          {/* Auth */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="cursor-pointer bg-gradient-to-r bg-transparent border text-white px-4 py-2 rounded-lg hover:opacity-90 hover:bg-white hover:border-red-50 hover:text-black" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu */}
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 w-7 text-white md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 w-7 text-white md:hidden"
            />
          )}
        </nav>
      </div>

      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  )
}

export default Navbar
