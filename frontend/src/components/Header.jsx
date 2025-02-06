import React from 'react'
import { IoMdSearch } from "react-icons/io";
import Logo from '../assets/Logo.png'; // Correct relative path


const Header = () => {
    let handleSearch = () => {
        // Add search functionality
    }

    return (
        <header className='flex flex-col bg-brand-primary-black text-white w-screen'>
            {/* Add a drop shadow to the black box (this nav tag) */}
            <nav className='flex items-center justify-between h-24'>
                {/* Logo */}
                <div className="flex items-center gap-4 ml-4 text-3xl">
                    <img src={Logo} alt="logo" className='size-16'/>
                    <h1>TROOP 747</h1>
                </div>
                {/* Search Bar */}
                <div className="flex border-white border border-neutral-400 rounded-2xl items-center px-2 py-1 relative left-32 -mr-4">
                    <input type="search" name="search" id="search" placeholder='Search...' className='outline-none pl-2 border-0 bg-transparent placeholder:text-sm placeholder:font-Inter placeholder:text-neutral-400'/>
                    <IoMdSearch className='search-icon' onChange={(e) => handleSearch(e)} />
                </div>
                {/* Links */}
                <div className='flex justify-around gap-8 w-1/3 relative right-14'>
                    <a href="/">HOME</a>
                    <a href="/eaglesnest">EAGLES' NEST</a>
                    <a href="/news">NEWS</a>
                </div>
            </nav>
            <div className="h-2 bg-brand-primary-gold" />
            {/* Bottom Links */}
            <div className="bg-brand-primary-brown flex justify-center items-center gap-4 h-12 text-sm">
                <a href="/calendar">Calendar</a>
                <a href="/events">Events</a>
                <a href="/photos">Photos</a>
                <a href="/troopplc">Troop PLC</a>
                <a href="/eaglescout">Eagle Scout</a>
                <a href="/scoutmaster">Scoutmaster</a>
                <a href="/resources">Resources</a>
            </div>
        </header>
    )
}

export default Header