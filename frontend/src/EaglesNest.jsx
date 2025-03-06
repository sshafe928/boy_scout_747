import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const EaglesNest = () => {
    const [formattedEagles, setFormattedEagles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/eagles')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const formatted = data.data.map((eagle) => {
                    const date = new Date(eagle.date);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('en-US', { month: 'long' });
                    const day = date.getDate();

                    return {
                        name: eagle.name,
                        year,
                        month,
                        day,
                        description: eagle.description,
                        rank: eagle.rank,
                        img_url: eagle.img_url
                    };
                });
                setFormattedEagles(formatted);
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, []);
    return (
        <>
        <Header/>
        <div className="flex flex-col gap-4">
            {formattedEagles.map((eagle, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <h3>{eagle.name}</h3>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    )
}

export default EaglesNest