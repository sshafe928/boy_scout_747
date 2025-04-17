import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

const EaglesNest = () => {
    const [formattedEagles, setFormattedEagles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEagles = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://troop747backend.onrender.com/api/eagles');
                const data = await response.json();

                if (data.success) {
                    const formatted = data.data.map((eagles) => {
                        const date = new Date(eagles.date);
                        return {
                            id: eagles.id || Math.random().toString(36).substr(2, 9),
                            name: eagles.name,
                            year: date.getFullYear(),
                            month: date.toLocaleString('en-US', { month: 'long' }),
                            day: date.getDate(),
                            description: eagles.description,
                            rank: eagles.rank,
                            img_url: eagles.img_url,
                            img_url_project: eagles.img_url_project,
                        };
                    });
                    setFormattedEagles(formatted);
                } else {
                    setError('Failed to fetch Eagle Scout data');
                }
            } catch (err) {
                setError('Error fetching Eagle Scout data');
                console.error('Error fetching news:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEagles();
    }, []);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-brand-accent-warm"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                {error}
            </div>
        );
    }

    return (
        <>
            <Header/>
            <main 
                className="min-h-screen flex flex-col gap-6 w-full p-4 md:p-8 lg:p-16" 
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            >
                {/* Eagle Scout Spotlight */}
                <div className="flex-1 bg-transparent lg:bg-brand-primary-gold text-white font-Tienne flex flex-col lg:p-8">
                    <div className="hidden lg:flex gap-6 justify-around items-center">
                        <div className="bg-brand-accent-light p-4 max-w-sm">
                            {formattedEagles.length > 0 && (
                                <img 
                                    src={formattedEagles[currentIndex]?.img_url_project} 
                                    alt={formattedEagles[currentIndex]?.name} 
                                    className='w-full h-auto object-cover'
                                />
                            )}
                        </div>
                        <div className="w-2/3 text-white">
                            {formattedEagles.length > 0 && (
                                <p className="text-lg leading-relaxed">
                                    {formattedEagles[currentIndex]?.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center h-full">
                        <Carousel 
                            carouselImages={formattedEagles} 
                            onSlideChange={handleSlideChange} 
                        />
                    </div>
                </div>

                {/* Eagle Info */}
                <div className="flex flex-col lg:flex-row w-full gap-6 justify-center lg:h-[40vw]">
                    <div className="bg-white border-4 border-brand-accent-warm">
                        <img src="https://res.cloudinary.com/dipxoeh1d/image/upload/v1741730084/135_1_bk1yig.png" alt="Eagle Scout Medal" className='h-full w-full'/>
                    </div>
                    <div className="flex flex-col gap-4 text-md lg:text-xl text-wrap">
                        <div className="bg-white border-4 border-brand-accent-warm px-4 py-8 h-4/5 lg:max-w-[40vw] text-center">What it means to achieve the rank of Eagle Scout in Troop 747</div>
                        <div className="hidden lg:block bg-white border-4 border-brand-accent-warm h-1/5"></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default EaglesNest;