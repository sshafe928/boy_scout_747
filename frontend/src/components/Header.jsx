import { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { X } from "lucide-react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
    // State management
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    });

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        handleResize(); // Initialize with current dimensions
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const handleSearch = () => {
        // Add search functionality
    };

    return (
        <header className="relative">
            {/* Mobile Header */}
            <nav className="flex items-center justify-between h-24 bg-brand-primary-black text-white px-4 lg:shadow-xl z-30 relative">
                <div className="flex items-center gap-2 lg:gap-4 lg:ml-4">
                    <img src={Logo} alt="logo" className="size-16 bg-white rounded-full"/>
                    <h1 className="text-2xl lg:text-3xl">TROOP 747</h1>
                </div>
                
                {/* Desktop Search Bar - Hidden on mobile */}
                <div className="hidden lg:flex border border-neutral-400 rounded-2xl items-center px-2 py-1 relative left-32 -mr-4">
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
                <div className='hidden lg:flex justify-around gap-8 w-1/3 relative right-14'>
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
                    className="text-3xl p-2 lg:hidden"
                >
                    ☰
                </button>
            </nav>

            {/* Gold divider and bottom links - Only visible on desktop */}
            <div className="hidden lg:block">
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

            {/* Mobile Menu - Slide-in animation instead of overlay */}
            <div className={`
                fixed top-0 left-full w-full h-screen 
                flex flex-col justify-center items-center text-center
                bg-brand-primary-black 
                translate-x-0 transition-transform duration-300 ease-linear z-40
                lg:hidden
                ${menuOpen ? 'translate-x-neg-full' : ''}
            `}>
                {/* Close Button */}
                <div className="flex w-full justify-end p-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-white"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                {/* Logo */}
                <div className="flex flex-col items-center gap-2 mb-4">
                    <img src={Logo} alt="logo" className="w-32 h-32 rounded-full" />
                    <h1 className="text-xl font-bold text-brand-primary-gold">TROOP 747</h1>
                </div>

                {/* Search Bar */}
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

                {/* Nav Items */}
                <nav className="flex flex-col items-center pt-8 space-y-20 font-Tienne font-medium text-lg text-brand-primary-gold mb-8">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/calendar" onClick={() => setMenuOpen(false)}>Calendar</Link>
                    <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
                    <Link to="/photos" onClick={() => setMenuOpen(false)}>Photos</Link>
                    <Link to="/eagles-nest" onClick={() => setMenuOpen(false)}>Eagles Nest</Link>
                    <Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;