import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

const NewsPage = () => {
    

    const sampleEvents = [
        {
            title: 'Boy Scout 747 Tour Begins in May',
            month: 'July',
            day: '15',
            time: '2:00 PM to 3:30 PM',
            content: 'The Boy Scout 747 Tour will begin in May, 2022, with the first stop being at the Eagle Nest. The tour will cover various activities and events, including camping, hiking, and birdwatching.'
        },
        {
            title: 'Community Art Fair',
            month: 'August',
            day: '10',
            time: '10:00 AM to 5:00 PM',
            content: 'Join us for the annual Community Art Fair, where local artists showcase their paintings, sculptures, and crafts. Enjoy live music, food stalls, and interactive art sessions!'
        },
        {
            title: 'Astronomy Night: Meteor Shower Viewing',
            month: 'September',
            day: '21',
            time: '8:30 PM to 11:00 PM',
            content: 'Experience a spectacular meteor shower at our special Astronomy Night event. Telescopes will be available, and experts will provide insights on celestial phenomena.'
        },
        {
            title: 'Charity Fun Run for Education',
            month: 'October',
            day: '5',
            time: '7:00 AM to 11:00 AM',
            content: 'Participate in our 5K and 10K Charity Fun Run to raise funds for local schools. Register online to receive a race bib and T-shirt. Refreshments and medals for participants!'
        },
        {
            title: 'Haunted House Experience',
            month: 'October',
            day: '29',
            time: '6:00 PM to 10:00 PM',
            content: 'Get ready for a spine-chilling Haunted House Experience! Dare to enter and navigate through eerie corridors filled with surprises. Suitable for ages 12 and up.'
        },
        {
            title: 'Thanksgiving Community Feast',
            month: 'November',
            day: '23',
            time: '4:00 PM to 7:00 PM',
            content: 'Celebrate Thanksgiving with the community! Enjoy a delicious meal, live music, and warm conversations. Free entry, but donations are welcome.'
        },
        {
            title: 'Winter Wonderland Festival',
            month: 'December',
            day: '15',
            time: '3:00 PM to 9:00 PM',
            content: 'Step into a magical Winter Wonderland with festive lights, ice skating, holiday markets, and a visit from Santa! Fun for all ages.'
        }
    ];
    

    return (
        <>
        <Header/>
        {/* Mobile Version of News Page */}
        <div className='flex flex-col my-5 gap-8 flex-wrap items-center justify-center sm:flex-row'>
            {sampleEvents.map((event, index) => {
                // Checks if card is odd to determine the background color
                return (
                    <div key={event.title} className={`p-8 border-b border-gray-300 flex flex-col w-4/5 h-64 sm:w-1/3 ${index % 2 !== 0 ? "bg-brand-accent-light" : "bg-brand-accent-warm text-white"}`}>
                        <h3 className='text-2xl'>{event.month}</h3>
                        <h1 className='text-4xl py-4 font-bold'>{event.day}</h1>
                        <p>{event.title}</p>
                        <p>{event.time}</p>
                    </div>
                )
                })}
        </div>
        <Footer/>
        </>
    )
}

export default NewsPage