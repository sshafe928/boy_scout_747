import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../assets/Logo.png';
import myImage from '../assets/scoutBg.png';
import HomeEvent from './HomeEvent';

const slides = [
    {
        title: "SCOUTING IS",
        subtitle: "An adventure of a lifetime",
        bgImage: "https://downbytheriverbandb.com/wp-content/uploads//2015/02/Yellow-Sunset.jpg",
        titleColor: "text-white",
        subtitleGradient: "from-[#A36826] to-[#0F0700]"
    },
    {
        title: "SCOUTING IS",
        subtitle: "Building tomorrow's leaders",
        bgImage: "https://imagesarizona.com/wp-content/uploads/2017/06/Riding-off-into-the-Sunset.jpg",
        titleColor: "text-white",
        subtitleGradient: "from-[#502402] to-[#150a05]"
    },
    {
        title: "SCOUTING IS",
        subtitle: "Making lasting friendships",
        bgImage: "https://images.fineartamerica.com/images-medium-large-5/golden-arizona-sunset-bryan-allen.jpg",
        titleColor: "text-amber-50",
        subtitleGradient: "from-amber-50 to-[#351800]"
    },
];

const HomeMain = () => {
    const [formattedEvents, setFormattedEvents] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/events')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const formatted = data.data.map((event) => ({
                    title: event.title,
                    type: event.type,
                    description: event.description,
                    location: event.location,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    img_url: event.img_url,
                }));
                setFormattedEvents(formatted);
            } else {
                console.error('Failed to fetch events:', data.message);
            }
        })
        .catch((err) => console.error('Error fetching events:', err));
    }, []);

    useEffect(() => {
        function findClosestUpcomingEvents(events) {
            const now = new Date();
            return events.filter(event => event.start >= now)
                .sort((a, b) => a.start - b.start)
                .slice(0, 6);
        }
        setEvents(findClosestUpcomingEvents(formattedEvents));
    }, [formattedEvents]);

    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    
    return (
        <div>
            {/* Section 1: Slideshow - Mobile first approach */}
            <div className="relative w-full h-96 lg:h-[40rem] overflow-hidden shadow-xl">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 lg:duration-2000 ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="relative w-full h-full">
                            <img 
                                src={slide.bgImage} 
                                alt={`Slide ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover lg:object-fill"
                            />
                            <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h2 className={`text-4xl landscape:text-6xl lg:landscape:text-9xl lg:text-9xl font-bold mb-4 tracking-wider ${slide.titleColor}`}>
                                    {slide.title}
                                </h2>
                                <p className={`text-xl landscape:text-3xl lg:landscape:text-7xl lg:text-7xl font-bold italic bg-gradient-to-r ${slide.subtitleGradient} bg-clip-text text-transparent lg:relative lg:top-20`}>
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 transition-colors
                            ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Info Section */}
            <section className='w-full pb-8 lg:pb-16'>
                {/* Header - Consistent across mobile/desktop */}
                <header className='flex items-center rounded-b-xl shadow-xl mb-4 p-4 bg-white'>
                    <img src={Logo} alt="logo" className='h-16 w-16'/>
                    <h1 className='text-2xl font-bold ml-2'>TROOP 747</h1>
                    <span className='ml-auto text-gray-600 hidden lg:block'>Youth Ages 11-17</span>
                </header>
                
                {/* Mobile & Desktop Content (Responsive Layout) */}
                <div className='px-4 lg:w-11/12 lg:mx-auto lg:flex lg:gap-8 lg:px-8'>
                    {/* Left Column */}
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl mb-2 mt-8'>What is the Troop 747 Program?</h2>
                        <p className='mb-6 text-gray-600'>The traditional Scouting program, Troop 747 follows Scouts BSA, where youth develop outdoor survival skills, self-confidence, and ethics through youth planned activities with increased attention to service, community engagement, and leadership.</p>
                        
                        <h2 className='font-bold text-xl mb-2 mt-12'>What Will I Do in Troop 747?</h2>
                        <p className='mb-6 text-gray-600'>Troop 747 is where youth explore their interests and develop skills by participating in outdoor activities like hiking, camping, and canoeing. Scouts earn merit badges along the journey and work towards achieving Scouting's highest rank—Eagle Scout.</p>
                        
                        <h2 className='font-bold text-xl mb-2 mt-12'>How often does Troop 747 meet?</h2>
                        <p className='mb-6 text-gray-600'>Troop 747 scouts meet every Tuesday.</p>
                    </div>
                    
                    {/* Right Column */}
                    <div className='lg:w-1/2'>
                        <h2 className='font-bold text-xl mb-2 mt-8'>Who runs Troop 747?</h2>
                        <p className='mb-6 text-gray-600'>Elected youth lead their troop and run the meetings at the guidance of the Scoutmaster and other adult leaders. Unlike Cub Scouts, Scouts BSA is a youth program planned mainly by the Scouts, not the parents.</p>
                        
                        <h2 className='font-bold text-xl mb-2 mt-12'>Why should I join Troop 747?</h2>
                        <p className='mb-6 text-gray-600'>Scouts BSA prepares youth to make ethical and moral choices over their lifetimes by instilling the values of the Scout Oath and Law. Throughout their time in Scouting, Scouts learn the value of hard work and experience the thrill of seeing it pay off.</p>
                        
                        {/* Learn More Button */}
                        <div className='h-1/6 mt-16'>
                            <Link to="/resources" className='bg-brand-accent-light py-3 px-6 rounded-full w-full h-full font-bold flex justify-center items-center'>LEARN MORE</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Scouts */}
            <div className='border-b-8 border-brand-primary-black shadow-xl'>
                <div className='text-center text-4xl lg:text-5xl bg-brand-primary-gold'>
                    <h1 className='p-1 lg:p-2'>Our Scouts</h1>
                </div>

                {/* Mobile layout */}
                <div className='lg:hidden'>
                    <div className='text-center h-96 flex items-center' style={{backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
                        <div className='m-auto'>
                            <h1 className='text-brand-primary-gold text-5xl font-Tienne'>Scouts Laws.</h1>
                            <h2 className='text-4xl text-white mt-10 font-Inter font-extralight'>Trustworthiness</h2>
                        </div>
                    </div>
                    
                    <div className='bg-brand-accent-brown'>
                        <div className='text-left w-4/5 mx-auto py-4'>
                            <h1 className='text-brand-primary-gold text-3xl font-Tienne'>Our Mission</h1>
                            <p className='text-white font-Inter font-light'>The Mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Scout Law.</p>
                        </div>
                        <div className='text-left w-4/5 mx-auto py-4'>
                            <h1 className='text-brand-primary-gold text-3xl font-Tienne'>Scouts Oath</h1>
                            <p className='text-white font-Inter font-light'>On my honor, I will do my best to do my duty to God and my country. To obey the Scout Law. To help other people at all times. To keep myself physically strong, mentally awake, and morally straight</p>
                        </div>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:flex h-[600px] w-screen overflow-hidden">
                    <div className='flex-1 text-center flex items-center' style={{backgroundImage: `url(${myImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <div className='m-auto w-full'>
                            <h1 className='text-brand-primary-gold text-7xl font-Tienne'>Scouts Laws.</h1>
                            <h2 className='text-6xl text-white mt-10 font-Inter font-extralight'>Trustworthiness</h2>
                        </div>
                    </div>
                    <div className='flex-1 bg-brand-accent-brown flex flex-col justify-evenly'>
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
            </div>

            {/* Section 3: Events */}
            <section className='py-8 bg-brand-primary-brown lg:bg-transparent' style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <h1 className="font-Tienne text-2xl lg:text-4xl text-center text-white mb-4">Upcoming Events</h1>
                {/* Event Cards */}
                <div className="flex gap-6 justify-center flex-wrap">
                    {events.map((event) => (
                        <HomeEvent key={event.title} img={event.img_url} title={event.title} desc={event.description}/>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeMain;