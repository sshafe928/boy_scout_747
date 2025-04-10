import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCarousel from './components/FloatingCarousel';

const EaglesNest = () => {
    const [formattedEagles, setFormattedEagles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/eagles')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
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
                console.log(formattedEagles)
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, [formattedEagles]);
    return (
        <>
            <Header/>
            <main className="min-h-screen w-full p-16" style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* Eagle Scout Spotlight */}
                <div className="bg-transparent lg:bg-brand-primary-gold text-white font-Tienne flex flex-col p-8">
                    <div className="hidden lg:flex gap-6 justify-around">
                        <div className="h-24 w-1/3 bg-brand-accent-light">
                            {/* News Event for Eagle */}
                        </div>
                        <div className="w-2/3 text-white ">
                            {/* Eagle Desc */}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, placeat blanditiis. Nemo, necessitatibus dolorem. Quae, inventore! Neque sed omnis laudantium enim perspiciatis id fugiat. Unde eius consequuntur molestias quidem animi!
                        </div>
                    </div>
                    <div className="flex">
                        <FloatingCarousel carouselImages={formattedEagles} />
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