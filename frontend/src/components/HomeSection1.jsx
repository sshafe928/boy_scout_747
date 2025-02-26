import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';


const slides = [
    {
        title: "SCOUTING IS",
        subtitle: "An adventure of a lifetime",
        bgImage: "https://downbytheriverbandb.com/wp-content/uploads//2015/02/Yellow-Sunset.jpg"
    },
    {
        title: "SCOUTING IS",
        subtitle: "Building tomorrow's leaders",
        bgImage: "/api/placeholder/1920/1080"
    },
    {
        title: "SCOUTING IS",
        subtitle: "Making lasting friendships",
        bgImage: "/api/placeholder/1920/1080"
    },
    {
        title: "SCOUTING IS",
        subtitle: "Learning valuable skills",
        bgImage: "/api/placeholder/1920/1080"
    }
]

const ScoutingSlideshow = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

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
        <>
            {/* Mobile HomeSection */}
            {isMobile ? (
                <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="relative w-full h-full">
                        <img 
                            src={slide.bgImage} 
                            alt={`Slide ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider text-white">
                            {slide.title}
                            </h2>
                            <p className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            {slide.subtitle}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}

                    {/* Navigation buttons */}
                    <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                    <ChevronLeft size={24} />
                    </button>
                    <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                    <ChevronRight size={24} />
                    </button>
                    
                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors
                            ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                    </div>
                </div>
                ) : (
                    <div className="relative w-full h-[50rem] overflow-hidden rounded-lg shadow-xl">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out
                            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="relative w-full h-full">
                            <img 
                                src={slide.bgImage} 
                                alt={`Slide ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-fill"
                            />
                            <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
    
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h2 className="text-[8vw] font-bold mb-4 tracking-wider text-white mb-[11rem]">
                                {slide.title}
                                </h2>
                                <p className="text-[4vw] font-bold italic bg-gradient-to-r from-[#A36826] to-[#0F0700] bg-clip-text text-transparent">
                                {slide.subtitle}
                                </p>
                            </div>
                            </div>
                        </div>
                        ))}
    
                        {/* Navigation buttons */}
                        <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                        >
                        <ChevronLeft size={24} />
                        </button>
                        <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                        >
                        <ChevronRight size={24} />
                        </button>
                        
                        {/* Slide indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors
                                ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                            />
                        ))}
                        </div>
                    </div>
            )}
        </>
    )
}

export default ScoutingSlideshow