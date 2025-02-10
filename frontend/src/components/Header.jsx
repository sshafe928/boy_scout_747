import { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { X } from "lucide-react";
import Logo from '../assets/Logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearch = () => {
        // Add search functionality
    }

    return (
        <>
            {/* Mobile Header */}
            {isMobile ? (
                <header className="relative">
                    <nav className="flex items-center justify-between h-24 bg-brand-primary-black text-white px-4">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="logo" className="size-16 bg-white rounded-full"/>
                            <h1 className="text-2xl">TROOP 747</h1>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-3xl p-2"
                        >
                            ☰
                        </button>
                    </nav>

                    {/* Full-screen Sidebar */}
                    {menuOpen && (
                        <div className="fixed inset-0 bg-white z-50">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-end p-4">
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="text-black"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                                
                                <div className="px-4 py-2">
                                    <div className="relative flex items-center">
                                        <input
                                            type="search"
                                            name="search"
                                            id="search"
                                            placeholder="Search..."
                                            className="w-full px-4 py-2 rounded-full border border-white focus:outline-none placeholder:font-Inter placeholder:text-white bg-black"
                                            onChange={(e) => handleSearch(e)}
                                        />
                                        <IoMdSearch className="absolute right-4 text-white" size={20} />
                                    </div>
                                </div>

                                <nav className="flex flex-col items-center pt-8 space-y-20 font-Tienne">
                                    <a href="/calendar" className="text-gray-800 text-lg font-medium">Calendar</a>
                                    <a href="/events" className="text-gray-800 text-lg font-medium">Events</a>
                                    <a href="/photos" className="text-gray-800 text-lg font-medium">Photos</a>
                                    <a href="/troopplc" className="text-gray-800 text-lg font-medium">Troop PLC</a>
                                    <a href="/eaglescout" className="text-gray-800 text-lg font-medium">Eagle Scout</a>
                                    <a href="/scoutmaster" className="text-gray-800 text-lg font-medium">Scoutmaster</a>
                                    <a href="/resources" className="text-gray-800 text-lg font-medium">Resources</a>
                                </nav>
                            </div>
                        </div>
                    )}
                </header>
            ) : (
                <header className='flex flex-col bg-brand-primary-black text-white w-screen'>
                    <nav className='flex items-center justify-between h-24 shadow-md'>
                        {/* Logo */}
                        <div className="flex items-center gap-4 ml-4 text-3xl">
                            <img src={Logo} alt="logo" className='size-16 bg-white rounded-full'/>
                            <h1>TROOP 747</h1>
                        </div>
                        {/* Search Bar */}
                        <div className="flex border-white border border-neutral-400 rounded-2xl items-center px-2 py-1 relative left-32 -mr-4">
                            <input type="search" name="search" id="search" placeholder='Search...' className='outline-none pl-2 border-0 bg-transparent placeholder:text-sm placeholder:font-Inter placeholder:text-neutral-400'/>
                            <IoMdSearch className='search-icon' onChange={(e) => handleSearch(e)} />
                        </div>
                        {/* Links */}
                        <div className='flex justify-around gap-8 w-1/3 relative right-14'>
                            <div className="relative group">
                                <a href="/">HOME</a>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                            </div>
                            <div className="relative group">
                                <a href="/eaglesnest">EAGLES' NEST</a>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                            </div>
                            <div className="relative group">
                                <a href="/news">NEWS</a>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                            </div>
                        </div>
                    </nav>
                    <div className="h-2 bg-brand-primary-gold" />
                    {/* Bottom Links */}
                    <div className="bg-brand-primary-brown flex justify-center items-center gap-4 h-12 text-sm">
                        <div className="relative group">
                            <a href="/calendar">Calendar</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/events">Events</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/photos">Photos</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/troopplc">Troop PLC</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/eaglescout">Eagle Scout</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/scoutmaster">Scoutmaster</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                        <div className="relative group">
                            <a href="/resources">Resources</a>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header