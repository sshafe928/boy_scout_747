import { Link } from 'react-router-dom'
import { LuFacebook, LuInstagram } from "react-icons/lu";
import LogoYellow from "../assets/LogoYellow.png"

const Footer = () => {
    return (
        <footer className="font-Inter w-full bg-brand-primary-black">
            {/* Upper Section - Mobile First Design */}
            <div className="pt-6 flex flex-col items-center text-center md:pt-12">
                <h1 className="text-brand-primary-gold font-bold text-3xl md:text-2xl">TROOP 747</h1>
                <hr className="h-0.5 border-none bg-brand-primary-gold w-4/5 mx-auto mb-4 md:hidden" />
            </div>
            <div className="flex flex-col justify-center text-center shadow-xl md:flex-row md:justify-around md:pb-4">
                {/* Navigation Links - Visible on mobile */}
                <div className="flex flex-wrap text-brand-primary-gold gap-8 w-4/5 mx-auto justify-center font-medium text-lg md:hidden">
                    <Link to="/">Home</Link>
                    <Link to="/eagles-nest">Eagle's Nest</Link>
                    <Link to="/news">News</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/photos">Photos</Link>
                    <Link to="/admins">For Admins</Link>
                </div>
                
                {/* Meeting Info - Different position based on screen size */}
                <p className="text-center text-brand-primary-gold text-xs mt-6 mb-4 w-4/5 mx-auto md:hidden">
                    Meeting every Tuesday at 6:30 PM at Phoenix Friends Church, 8055 N 39th Ave, Phoenix, AZ 85051
                </p>
                
                {/* Desktop Left Section - Hidden on mobile */}
                <div className="hidden md:flex md:justify-center md:items-center md:text-center md:text-brand-primary-gold md:w-1/3">
                    <p className='md:w-3/4 md:leading-10'>
                        Meeting every Tuesday at 6:30 PM at Phoenix Friends Church, 8055 N 39th Ave, Phoenix, AZ 85051
                    </p>
                </div>
                
                {/* Desktop Middle Section - Logo visible only on desktop */}
                <div className="hidden md:w-1/3 md:flex md:flex-col md:items-center">
                    <img src={LogoYellow} alt="Gold Troop Logo" className="hidden md:block" />
                </div>
                
                {/* Desktop Right Section - Navigation links */}
                <div className="hidden md:w-1/3 md:flex md:flex-col md:items-center md:justify-center md:font-bold">
                    <h2 className="hidden md:block md:text-white md:text-xl md:text-left md:mb-2 md:-ml-[5%]">Explore</h2>
                    <ul className='hidden md:block md:text-brand-primary-gold md:text-left'>
                        <li className='mb-2'><Link to="/" className="text-brand-primary-gold">Home</Link></li>
                        <li className='mb-2'><Link to="/eagles-nest" className="text-brand-primary-gold">Eagle's Nest</Link></li>
                        <li className='mb-2'><Link to="/news" className="text-brand-primary-gold">News</Link></li>
                        <li className='mb-2'><Link to="/calendar" className="text-brand-primary-gold">Calendar</Link></li>
                        <li className='mb-2'><Link to="/photos" className="text-brand-primary-gold">Photos</Link></li>
                        <li><Link to="/admin" className="text-brand-primary-gold">For Admins</Link></li>
                    </ul>
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center pb-6 md:hidden">
                    <a href="https://www.facebook.com/troop747phoenix" target="_blank" rel="noopener noreferrer">
                        <LuFacebook className="text-brand-primary-gold size-7"/>
                    </a>
                    <a href="https://www.instagram.com/troop747phoenix/" target="_blank" rel="noopener noreferrer">
                        <LuInstagram className="text-brand-primary-gold size-7"/>
                    </a>
                </div>
            </div>
            
            {/* Social Icons - Desktop */}
            <div className='hidden md:block md:bg-brand-primary-black md:flex md:justify-center md:pb-4'>
                <div className="hidden md:mx-auto md:flex md:items-center md:gap-4">
                    <a href="https://www.instagram.com/troop747phoenix/" target="_blank" rel="noopener noreferrer">
                        <LuInstagram className="text-brand-primary-gold size-7"/>
                    </a>
                    <a href="https://www.facebook.com/troop747phoenix" target="_blank" rel="noopener noreferrer">
                        <LuFacebook className="text-brand-primary-gold size-7"/>
                    </a>
                </div>
            </div>
            
            {/* Lower Section */}
            <div className="bg-brand-primary-gold font-Tienne">
                <p className="text-center text-brand-primary-black py-4">© 2025 Copyright: Boy Scouts 747. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer