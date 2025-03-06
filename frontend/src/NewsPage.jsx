import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const NewsPage = () => {
    const [formattedEvents, setFormattedEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const formatted = data.data.map((event) => {
                    const date = new Date(event.date);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('en-US', { month: 'long' });
                    const day = date.getDate();

                    return {
                        title: event.title,
                        year,
                        month,
                        day,
                        description: event.description,
                        location: event.location,
                    };
                });
                setFormattedEvents(formatted);
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, []);
    
    return (
        <>
        <Header/>
        {/* Mobile Version of News Page */}
        <div className='flex flex-col my-5 gap-8 flex-wrap items-center justify-center sm:flex-row'>
            {formattedEvents.map((event, index) => {
                return (
                    <div key={event.title} className={`font-Tienne p-8 border-b border-gray-300 flex flex-col w-4/5 h-64 sm:w-1/3 lg:w-1/4 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>
                        <div className="flex justify-between">
                            <h3 className='text-2xl'>{event.month}</h3>
                            <h3 className="text-2xl">{event.year}</h3>
                        </div>
                        <h1 className='text-5xl py-4 font-bold'>{event.day}</h1>
                        <p className='text-lg pb-4'>{event.title}</p>
                        <p className='font-semibold'>{event.time}</p>
                        {/* The content that will display over the element when hovered over */}
                        <div className={`flex justify-center text-center items-center absolute inset-y-0 left-0 w-full text-xl p-5 opacity-0 transition ease-in-out duration-500 hover:opacity-100 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>{event.description}</div>
                    </div>
                );
            })}
        </div>
        <Footer/>
        </>
    );
}

export default NewsPage;
