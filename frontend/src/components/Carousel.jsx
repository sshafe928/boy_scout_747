import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ carouselImages = [], onSlideChange}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                const newSlide = (prev + 1) % carouselImages.length;
                onSlideChange?.(newSlide); // Ensure it's a safe call
                return newSlide;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, [carouselImages.length, onSlideChange]);
    
    useEffect(() => {
        onSlideChange(currentSlide);
    }, [currentSlide, onSlideChange]);
    
    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = (prev + 1) % carouselImages.length;
            onSlideChange?.(newSlide);
            return newSlide;
        });
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = (prev - 1 + carouselImages.length) % carouselImages.length;
            onSlideChange?.(newSlide);
            return newSlide;
        });
    };
    return (
        <div className="relative w-full h-96 lg:w-1/5 overflow-hidden shadow-xl">
            {carouselImages.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 lg:duration-2000 ease-in-out
                    ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Background Image */}
                    <div className="relative w-full h-full">
                        <img 
                            src={slide.img_url} 
                            alt={slide.name}
                            className="absolute inset-0 w-full h-full object-cover lg:object-fill"
                        />
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
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            onSlideChange?.(index);
                        }}
                        className={`w-2 h-2 transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;