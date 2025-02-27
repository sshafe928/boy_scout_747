import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LuFacebook, LuInstagram  } from "react-icons/lu";
import NavLink from './NavLink'
import LogoYellow from "../assets/LogoYellow.png"

const Footer = () => {
        const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <>
            {isMobile ? (
                <footer className="font-Inter w-screen">
                    {/* Upper Section */}
                    <div className="flex flex-col bg-brand-primary-black justify-center text-center pt-6 shadow-xl md:flex-row md:justify-around md:pt-12 md:pb-4">
                        <h1 className="text-brand-primary-gold font-bold text-3xl">TROOP 747</h1>
                        <hr className="h-0.5 border-none bg-brand-primary-gold w-4/5 mx-auto mb-4 md:hidden" />
                        <div className="flex flex-wrap text-brand-primary-gold gap-8 w-4/5 mx-auto justify-center font-bold">
                            <Link to="/" className="text-gray-800 text-lg font-medium">Home</Link>
                            <Link to="/eagles-nest" className="text-gray-800 text-lg font-medium">Eagle's Nest</Link>
                            <Link to="/news" className="text-gray-800 text-lg font-medium">News</Link>
                            <Link to="/calendar" className="text-gray-800 text-lg font-medium">Calendar</Link>
                            <Link to="/photos" className="text-gray-800 text-lg font-medium">Photos</Link>
                            <Link to="/admins" className="text-gray-800 text-lg font-medium">For Admins</Link>
                        </div>
                        <p className="text-center text-brand-primary-gold text-xs mt-6 mb-4 w-4/5 mx-auto">Meeting every Tuesday at 6:30 PM at Phoenix Friends Church, 8055 N 39th Ave, Phoenix, AZ 85051</p>
                        {/* Social Icons */}
                        <div className="flex justify-center pb-6">
                            <a href="https://www.facebook.com/troop747phoenix" target="_blank" rel="noopener noreferrer">
                                <LuFacebook className="text-brand-primary-gold size-7"/>
                            </a>
                            <a href="https://www.instagram.com/troop747phoenix/" target="_blank" rel="noopener noreferrer">
                                <LuInstagram className="text-brand-primary-gold size-7"/>
                            </a>
                        </div>
                    </div>
                    {/* Lower Section */}
                    <div className="bg-brand-primary-gold font-Tienne">
                        <p className="text-center text-brand-primary-black py-4">© 2025 Copyright: Boy Scouts 747. All rights reserved.</p>
                    </div>
                </footer>
                ) : (
                    <footer className="font-Inter w-screen">
                        {/* Upper Section */}
                            <section className="flex justify-around bg-brand-primary-black text-center pt-12 pb-4 shadow-defaultShadow">
                                {/* Left Section */}
                                <div className="flex justify-center items-center text-center text-brand-primary-gold w-1/3">
                                    <p className='w-3/4 leading-10'>Meeting every Tuesday at 6:30 PM at Phoenix Friends Church, 8055 N 39th Ave, Phoenix, AZ 85051</p>
                                </div>
                                {/* Middle Section */}
                                <div className="w-1/3 flex flex-col items-center">
                                    <h1 className="text-brand-primary-gold font-bold text-2xl mb-2">TROOP 747</h1>
                                    <img src={LogoYellow} alt="Gold Troop Logo"/>
                                </div>
                                {/* Right Section */}
                                <div className="w-1/3 flex flex-col items-center justify-center font-bold">
                                    <h2 className="text-white text-xl text-left mb-2 -ml-[5%]">Explore</h2>
                                    <ul className='text-brand-primary-gold text-left'>
                                        <li className='mb-2'><NavLink title={'Home'} href={'/'} /></li>
                                        <li className='mb-2'><NavLink title={"Eagle's Nest"} href={'/eagles-nest'} /></li>
                                        <li className='mb-2'><NavLink title={'News'} href={'/news'} /></li>
                                        <li className='mb-2'><NavLink title={'Calendar'} href={'/calendar'} /></li>
                                        <li className='mb-2'><NavLink title={'Photos'} href={'/photos'} /></li>
                                        <li><NavLink title={'For Admins'} href={'/admin'} /></li>
                                    </ul>
                                </div>
                            </section>
                            <section className='bg-brand-primary-black flex justify-center pb-4'>
                                <div className="mx-auto flex items-center gap-4">
                                    <a href="https://www.instagram.com/troop747phoenix/" target="_blank" rel="noopener noreferrer">
                                        <LuInstagram className="text-brand-primary-gold size-7"/>
                                    </a>
                                    <a href="https://www.facebook.com/troop747phoenix" target="_blank" rel="noopener noreferrer">
                                        <LuFacebook className="text-brand-primary-gold size-7"/>
                                    </a>
                                </div>
                            </section>
                        {/* Lower Section */}
                        <section className="bg-brand-primary-gold font-Tienne">
                            <p className="text-center text-brand-primary-black py-4">© 2025 Copyright: Boy Scouts 747. All rights reserved.</p>
                        </section>
                    </footer>
                )
        }
        </>
    )
}

export default Footer