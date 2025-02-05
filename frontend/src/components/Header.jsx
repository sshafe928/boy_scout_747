import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Header = () => {
    let handleSearch = () => {
        // Add search functionality
    }

    return (
        <header className='flex flex-col bg-brand-primary-black text-white w-screen'>
            <nav className='flex items-center justify-between h-24'>
                {/* Logo */}
                <div className="flex gap-4 ml-4">
                    <img src="../assets/LogoYellow.png" alt="logo"/>
                    <h1>Troop 747</h1>
                </div>
                {/* Search Bar */}
                <div className="flex border-white border rounded-2xl items-center px-2 py-1">
                    <input type="search" name="search" id="search" placeholder='Search...' className='outline-none border-0 bg-transparent'/>
                    <IoMdSearch className='search-icon' onChange={(e) => handleSearch(e)} />
                </div>
                {/* Links */}
                <div className='flex justify-between gap-4'>
                    <a href="/">HOME</a>
                    <a href="/eaglesnest">EAGLES' NEST</a>
                    <a href="/news">NEWS</a>
                </div>
            </nav>
            <div className="h-2 bg-brand-primary-gold" />
            {/* Bottom Links */}
            <div className="bg-brand-primary-brown flex justify-center items-center gap-4 h-12">
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