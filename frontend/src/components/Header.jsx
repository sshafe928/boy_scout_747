import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import Logo from '../assets/Logo.png'; // Correct relative path


const Header = () => {
    // React Hooks for the mobile menu and navbar dropdowns
    // State management for navigation and responsiveness
    const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu visibility
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    }); // Tracks window dimensions for responsive behavior

    // Window resize event listener
    // useEffect to check window size and adjust mobile menu open state accordingly
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize(); // Initialize size state with current window dimensions
        window.addEventListener('resize', handleResize)

        // Cleanup function to remove event listener 
        return () => window.removeEventListener('resize', handleResize)
    }, []) 

    // Adjust menu visibility based on screen size
    useEffect(() => {
        // Adjust menu width based on screen size
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    

    // Changes the mobile menu open state to true or false
    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen);
    }

    let handleSearch = () => {
        // Add search functionality
    }

    return (
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
                        <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <a href="/eaglesnest">EAGLES' NEST</a>
                        <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                    <div className="relative group">
                        <a href="/news">NEWS</a>
                        <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                    </div>
                </div>
            </nav>
            <div className="h-2 bg-brand-primary-gold" />
            {/* Bottom Links */}
            <div className="bg-brand-primary-brown flex justify-center items-center gap-4 h-12 text-sm">
                <div className="relative group">
                    <a href="/calendar">Calendar</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                    <a href="/events">Events</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                    <a href="/photos">Photos</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                <a href="/troopplc">Troop PLC</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                <a href="/eaglescout">Eagle Scout</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                    <a href="/scoutmaster">Scoutmaster</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group">
                    <a href="/resources">Resources</a>
                    <span class="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
            </div>
        </header>
    )
}

export default Header