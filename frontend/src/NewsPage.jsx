import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const NewsPage = () => {
    const [formattedNews, setFormattedNews] = useState([]);
    // Change this to control the initial number of items
    const [visibleItemCount, setVisibleItemCount] = useState(3);
    // Initially empty until data is loaded
    const [displayedData, setDisplayedData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const formatted = data.data.map((news) => {
                    const date = new Date(news.date);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('en-US', { month: 'long' });
                    const day = date.getDate();

                    return {
                        title: news.title,
                        year,
                        month,
                        day,
                        description: news.description,
                        location: news.location,
                    };
                });
                setFormattedNews(formatted);
                // Set initial displayed data
                setDisplayedData(formatted.slice(0, visibleItemCount));
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, []);

    useEffect(() => {
        setDisplayedData(formattedNews.slice(0, visibleItemCount)); // Update displayedData when formattedNews updates
    }, [formattedNews, visibleItemCount]);

    // Handler for the "Load More" button
    const handleLoadMore = () => {
        setVisibleItemCount(prevCount => prevCount + 3); // Load 3 more items at a time
    };

    return (
        <>
        <Header/>
        <body style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Mobile Version of News Page */}
            <div className='flex flex-col my-14 gap-8 flex-wrap items-center justify-center sm:flex-row'>
                {displayedData.map((news, index) => {
                    return (
                        <div key={news.title} className={`relative font-Tienne p-8 border-b border-gray-300 flex flex-col w-4/5 h-64 sm:w-1/3 lg:w-1/4 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>
                            <div className="flex justify-between">
                                <h3 className='text-2xl'>{news.month}</h3>
                                <h3 className="text-2xl">{news.year}</h3>
                            </div>
                            <h1 className='text-5xl py-4 font-bold'>{news.day}</h1>
                            <p className='text-lg pb-4'>{news.title}</p>
                            <p className='font-semibold'>{news.time}</p>
                            {/* The content that will display over the element when hovered over */}
                            <div className={`flex justify-center text-center items-center absolute inset-y-0 left-0 w-full text-xl p-5 opacity-0 transition ease-in-out duration-500 hover:opacity-100 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>{news.description}</div>
                        </div>
                    );
                })}
            </div>
            {visibleItemCount < formattedNews.length && (
                <div className='text-center my-auto mb-8'>
                    <button onClick={handleLoadMore} className='bg-black w-4/5 text-2xl p-4 text-white md:w-2/5 md:bg-white md:bg-opacity-30 lg:w-1/5'>Load More Events</button>
                </div>
            )}
        </body>
        <Footer/>
        </>
    );
}

export default NewsPage;
