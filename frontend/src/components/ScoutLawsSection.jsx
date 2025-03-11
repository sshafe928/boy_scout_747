import { useState, useEffect } from 'react';

const ScoutLawsSection = () => {
    // Array of scout laws and corresponding images
    const scoutLaws = [
        { law: "Trustworthiness", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312211/302156029_8027812760622139_1681113199262919552_n_cieuv6.jpg" },
        { law: "Loyalty", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312220/456240340_906700848161887_8830229996756391773_n_m2mqqr.jpg" },
        { law: "Helpful", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312458/476020372_1030169912481646_7221548792541562995_n_anki2w.jpg" },
        { law: "Friendly", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312213/327169232_724139569376130_6619739900386276306_n_1_azt5jc.jpg" },
        { law: "Courteous", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312441/399650333_728124849352822_4307364861852382049_n_iyxv7n.jpg" },
        { law: "Kind", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312457/456139401_906700804828558_1285626379640604273_n_tvxdpj.jpg" },
        { law: "Obedient", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312382/347421379_656610216504286_887037288450018419_n_ejbzpb.jpg" },
        { law: "Cheerful", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312446/254975370_6521063694630394_6130819484671084518_n_gkquq2.jpg" },
        { law: "Thrifty", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312379/309197894_8191807340889346_7809001683119477166_n_infxta.jpg" },
        { law: "Brave", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312388/255060818_6521078261295604_7548107587033837413_n_eoh3wx.jpg" },
        { law: "Clean", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312218/409179755_745588044273169_9216388477610189511_n_olnexs.jpg" },
        { law: "Reverent", image: "https://res.cloudinary.com/dipxoeh1d/image/upload/v1739312369/444990413_853118696853436_215267559529767433_n_gufkty.jpg" }
    ];

    // State to keep track of current law index and fade state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Set up interval to change the law every 5 seconds
        const interval = setInterval(() => {
        // Start the fade out
        setFade(true);
        
        // After fade out completes, change the content and fade back in
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % scoutLaws.length);
            setFade(false);
        }, 1000); // This should match the CSS transition duration
        
        }, 5000); // Change every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [scoutLaws.length]);

    return (
        <div 
        className='flex-1 bg-brand-primary-brown text-center flex items-center h-96 lg:h-auto relative overflow-hidden before:content-'
        style={{
            backgroundImage: `url(${scoutLaws[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 1s ease-in-out'
        }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] to-[#0d0d0d] opacity-60 z-10" />
            <div className={`z-20 m-auto w-full transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className='text-brand-primary-gold text-5xl lg:text-7xl font-Tienne'>Scouts Laws.</h1>
                <h2 className='text-white text-4xl lg:text-6xl mt-10 font-Inter font-extralight'>
                {scoutLaws[currentIndex].law}
                </h2>
            </div>
        </div>
    );
};

export default ScoutLawsSection;