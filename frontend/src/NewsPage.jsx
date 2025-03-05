import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const NewsPage = () => {
    const [formattedEvents, setFormattedEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const formatted = data.data.map((event) => {
                    const date = new Date(event.date);
                    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

                    return {
                        title: event.title,
                        date: formattedDate,
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
                // Checks if card is odd to determine the background color
                return (
                    <div key={event.title} className={`font-Tienne p-8 border-b border-gray-300 flex flex-col w-4/5 h-64 sm:w-1/3 lg:w-1/4 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>
                        <h3 className='text-2xl'>{event.date}</h3>
                        <h1 className='text-5xl py-4 font-bold'>{event.date}</h1>
                        <p className='text-lg pb-4'>{event.title}</p>
                        <p className='font-semibold'>{event.location}</p>
                    </div>
                )
                })}
        </div>
        <Footer/>
        </>
    )
}

export default NewsPage