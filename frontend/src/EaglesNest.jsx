import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
                        img_url: eagles.img_url
                    };
                });
                setFormattedEagles(formatted);
                console.log(formattedEagles)
            }
        })
        .catch(error => console.error('Error fetching news:', error));
    }, []);
    return (
        <>
        <Header/>
        <div className="flex flex-col gap-4">
            {formattedEagles.map((eagle, index) => {
                return(
                    <div key={index} className="flex flex-col gap-4">
                        <h3>{eagle.name}</h3>
                        <h3>{eagle.rank}</h3>
                        <h3>{eagle.date}</h3>
                        <h3>{eagle.description}</h3>
                        <h3>{eagle.img_url}</h3>
                    </div>
                )
            })}
        </div>
        <Footer/>
        </>
    )
}

export default EaglesNest