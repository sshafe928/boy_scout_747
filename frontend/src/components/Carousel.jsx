import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ carouselImages = [], onSlideChange }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        if (carouselImages.length === 0) return;

        const timer = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [carouselImages.length]);
    
    useEffect(() => {
        onSlideChange?.(currentSlide);
    }, [currentSlide, onSlideChange]);
    
    const handleNextSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = (prev + 1) % carouselImages.length;
            return newSlide;
        });
    };
    
    const handlePrevSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = (prev - 1 + carouselImages.length) % carouselImages.length;
            return newSlide;
        });
    };

    const handleDirectSlideChange = (index) => {
        setCurrentSlide(index);
    };

    if (carouselImages.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full max-w-xl h-[600px] overflow-hidden rounded-lg">
            {carouselImages.map((slide, index) => (
                <div
                    key={slide.id || index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                    ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={slide.img_url} 
                        alt={slide.name}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>
            ))}
            
            {/* Navigation buttons */}
            {carouselImages.length > 1 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        aria-label="Previous Slide"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNextSlide}
                        aria-label="Next Slide"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
            
            {/* Slide indicators */}
            {carouselImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDirectSlideChange(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;