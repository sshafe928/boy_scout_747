import { useState, useEffect } from 'react'
import myImage from '../assets/scoutBg.png';

const HomeSection2 = () => {
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
    {/* Mobile Section 2 */}
    { isMobile ? (
        <div className="mobileSection bg-[#4B2E18]">
            {/* Top Section */}
            <div className='text-center text-4xl bg-brand-primary-gold'>
                <h1 className='p-1'>Our Scouts</h1>
            </div>
            {/* Middle Section */}
            <div className='text-center h-96 flex items-center' style={{backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
                <div className='m-auto'>
                    <h1 className='text-brand-primary-gold text-5xl font-Tienne'>Scouts Laws.</h1>
                    <h2 className='text-4xl text-white mt-10 font-Inter font-extralight'>Trustworthiness</h2>
                </div>
            </div>
            {/* Lower Section */}
            <div className='text-left w-4/5 mx-auto py-4'>
                <h1 className='text-brand-primary-gold text-3xl font-Tienne'>Our Mission</h1>
                <p className='text-white font-Inter font-light'>The Mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Scout Law.</p>
            </div>
            <div className='text-left w-4/5 mx-auto py-4'>
                <h1 className='text-brand-primary-gold text-3xl font-Tienne'>Scouts Oath</h1>
                <p className='text-white font-Inter font-light'>On my honor, I will do my best to do my duty to God and my country. To obey the Scout Law. To help other people at all times. To keep myself physically strong, mentally awake, and morally straight</p>
            </div>
        </div>
    ): (
        // Desktop Section
        <>
            <div className='text-center text-5xl bg-brand-primary-gold'>
                <h1 className='p-2'>Our Scouts</h1>
            </div>
            {/* Flex Section */}
            <div className="desktopSection flex h-[600px] w-screen overflow-hidden">
                {/* Left Section of Page */}
                <div className='flex-1 text-center flex items-center' style={{backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className='m-auto w-full'>
                        <h1 className='text-brand-primary-gold text-7xl font-Tienne'>Scouts Laws.</h1>
                        <h2 className='text-6xl text-white mt-10 font-Inter font-extralight'>Trustworthiness</h2>
                    </div>
                </div>
                {/* Right Section of Page */}
                <div className='flex-1 bg-[#4B2E18] flex flex-col justify-evenly'>
                    <div className='text-left w-4/5 mx-auto py-4'>
                        <h1 className='text-brand-primary-gold text-5xl font-Tienne pb-5'>Our Mission</h1>
                        <p className='text-white font-Inter font-light text-2xl'>The Mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Scout Law.</p>
                    </div>

                    <div className='text-left w-4/5 mx-auto py-4'>
                        <h1 className='text-brand-primary-gold text-5xl font-Tienne pb-5'>Scouts Oath</h1>
                        <p className='text-white font-Inter font-light text-2xl'>On my honor, I will do my best to do my duty to God and my country. To obey the Scout Law. To help other people at all times. To keep myself physically strong, mentally awake, and morally straight</p>
                    </div>
                </div>
            </div>
        </>
    )}
    </>
  )
}

export default HomeSection2