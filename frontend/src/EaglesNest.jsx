import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

const EaglesNest = () => {
    const [formattedEagles, setFormattedEagles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/api/eagles')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                console.log(data)
                const formatted = data.data.map((eagles) => {
                    const date = new Date(eagles.date);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('en-US', { month: 'long' });
                    const day = date.getDate();

                    return {
                        name: eagles.name,
                        year,
                        month,
                        day,
                        description: eagles.description,
                        rank: eagles.rank,
                        img_url: eagles.img_url,
                        img_url_project: eagles.img_url_project,
                    };
                });
                setFormattedEagles(formatted);
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, []);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    

    return (
        <>
            <Header/>
            <main className="min-h-screen flex flex-col gap-6 w-full p-16" style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* Eagle Scout Spotlight */}
                <div className="bg-transparent lg:bg-brand-primary-gold text-white font-Tienne flex flex-col p-8">
                    <div className="hidden lg:flex gap-6 justify-around">
                        <div className="bg-brand-accent-light p-4">
                            {/* News Event for Eagle */}
                            {formattedEagles.length > 0 && (
                                <img src={formattedEagles[currentIndex]?.img_url_project} alt={formattedEagles[currentIndex]?.name} className='max-w-80'/>
                            )}
                        </div>
                        <div className="w-2/3 text-white">
                            {/* Eagle Desc */}
                            {formattedEagles.length > 0 && (
                                <p>{formattedEagles[currentIndex]?.description}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Carousel carouselImages={formattedEagles} onSlideChange={handleSlideChange} />
                    </div>
                    
                </div>
                {/* Eagle Info */}
                <div className="flex w-full gap-6 justify-center lg:h-[40vw]">
                    <div className="hidden lg:block bg-white border-4 border-brand-accent-warm">
                        <img src="https://res.cloudinary.com/dipxoeh1d/image/upload/v1741730084/135_1_bk1yig.png" alt="Eagle Scout Medal" className='h-full w-full'/>
                    </div>
                    <div className="flex flex-col gap-4 text-md lg:text-xl text-wrap">
                        <div className="bg-white border-4 border-brand-accent-warm px-4 py-8 h-4/5 lg:max-w-[40vw] text-center">What it means to achieve the rank of Eagle Scout in Troop 747</div>
                        <div className="bg-white border-4 border-brand-accent-warm h-1/5"></div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default EaglesNest