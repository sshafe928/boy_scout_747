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
            { id: 1, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/cld-sample-2.jpg', title: 'Event 1', desc: 'Description of Event 1' },
            { id: 2, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/cld-sample.jpg', title: 'Event 2', desc: 'Description of Event 2' },
            { id: 3, src: 'https://res.cloudinary.com/drnaycy06/image/upload/v1731009868/samples/coffee.jpg', title: 'Event 3', desc: 'Description of Event 3' }
        ]
    return (
        <>
            {isMobile ? (
                <>
                    <h1 className="font-Tienne text-2xl">Upcoming Events</h1>
                    {/* Event Cards */}
                    <div className="flex gap-6 justify-center flex-wrap">
                        {events.map((event) => {
                            return <HomeEvent key={event.id} img={event.src} title={event.title} desc={event.desc}/>
                        })}
                    </div>
                </>
            ) : (
                <h1 className="font-Tienne text-4xl">Upcoming Events</h1>
            )}
        </>
    )
}

export default HomeSection3