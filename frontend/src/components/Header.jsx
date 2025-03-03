import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { X } from "lucide-react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = () => {
        // Add search functionality
    }

    return (
        <header className="relative">
            {/* Mobile Header */}
            <nav className="flex items-center justify-between h-24 bg-brand-primary-black text-white px-4 md:shadow-xl">
                <div className="flex items-center gap-2 md:gap-4 md:ml-4">
                    <img src={Logo} alt="logo" className="size-16 bg-white rounded-full"/>
                    <h1 className="text-2xl md:text-3xl">TROOP 747</h1>
                </div>
                
                {/* Desktop Search Bar - Hidden on mobile */}
                <div className="hidden landscape:hidden md:flex border border-neutral-400 rounded-2xl items-center px-2 py-1 relative left-32 -mr-4">
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder='Search...' 
                        className='outline-none pl-2 border-0 bg-transparent placeholder:text-sm placeholder:font-Inter placeholder:text-neutral-400'
                    />
                    <IoMdSearch className='search-icon' onChange={(e) => handleSearch(e)} />
                </div>
                
                {/* Desktop Navigation Links - Hidden on mobile */}
                <div className='hidden md:flex justify-around gap-8 w-1/3 relative right-14'>
                    <div className="relative group">
                        <Link to="/">HOME</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <Link to="/eagles-nest">EAGLES' NEST</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <Link to="/news">NEWS</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                </div>
                
                {/* Mobile Menu Button - Hidden on desktop */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-3xl p-2 md:hidden"
                >
                    ☰
                </button>
            </nav>

            {/* Gold divider and bottom links - Only visible on desktop */}
            <div className="hidden md:block">
                <div className="h-2 bg-brand-primary-gold" />
                <div className="bg-brand-primary-brown flex justify-center space-x-9 items-center gap-4 h-12 text-md text-white">
                    <div className="relative group">
                        <Link to="/calendar">Calendar</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <Link to="/news">News</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <Link to="/photos">Photos</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <Link to="/resources">Resources</Link>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Full screen overlay */}
            {/* Add transition */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-50 md:hidden">
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
                                    className="w-full text-white px-4 py-2 rounded-full border border-white focus:outline-none placeholder:font-Inter placeholder:text-white bg-black"
                                    onChange={(e) => handleSearch(e)}
                                />
                                <IoMdSearch className="absolute right-4 text-white" size={20} />
                            </div>
                        </div>

                        <nav className="flex flex-col items-center pt-8 space-y-20 font-Tienne">
                            <Link to="/" className="text-gray-800 text-lg font-medium">Home</Link>
                            <Link to="/calendar" className="text-gray-800 text-lg font-medium">Calendar</Link>
                            <Link to="/news" className="text-gray-800 text-lg font-medium">News</Link>
                            <Link to="/photos" className="text-gray-800 text-lg font-medium">Photos</Link>
                            <Link to="/eagles-nest" className="text-gray-800 text-lg font-medium">Eagles Nest</Link>
                            <Link to="/resources" className="text-gray-800 text-lg font-medium">Resources</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;