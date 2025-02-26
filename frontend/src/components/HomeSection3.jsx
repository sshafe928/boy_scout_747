import { useState, useEffect } from 'react'
import HomeEvent from './HomeEvent'

const HomeSection3 = () => {
        const [isMobile, setIsMobile] = useState(false);
        
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        
        const events = [
            { id: 1, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/cld-sample-2.jpg', title: 'Camp Geronimo', desc: 'Camp Geronimo is a premier summer camp experience for Boy Scouts of America, nestled in the scenic Payson, Arizona wilderness. Surrounded by towering ponderosa pines and breathtaking mountain landscapes' },
            { id: 2, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/cld-sample.jpg', title: 'Event 2', desc: 'Description of Event 2' },
            { id: 3, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009868/samples/coffee.jpg', title: 'Event 3', desc: 'Description of Event 3' }
        ]
    return (
        <>
            {isMobile ? (
                <section className='py-8 bg-brand-primary-brown' style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <h1 className="font-Tienne text-2xl text-center mb-4">Upcoming Events</h1>
                    {/* Event Cards */}
                    <div className="flex gap-6 justify-center flex-wrap">
                        {events.map((event) => {
                            return <HomeEvent key={event.id} img={event.src} title={event.title} desc={event.desc}/>
                        })}
                    </div>
                </section>
            ) : (
                <section className='py-8' style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <h1 className="font-Tienne text-4xl text-center mb-4">Upcoming Events</h1>
                    {/* Event Cards */}
                    <div className="flex gap-6 justify-center flex-wrap">
                        {events.map((event) => {
                            return <HomeEvent key={event.id} img={event.src} title={event.title} desc={event.desc}/>
                        })}
                    </div>
                </section>
            )}
        </>
    )
}

export default HomeSection3