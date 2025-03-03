import Header from './components/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './scss/calendar.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';

const localizer = momentLocalizer(moment);

const Converter = (utcData) =>{
  const date = new Date(utcData);
  date.setHours(date.getHours() +7);
  return date;
}

function BigCalendar() {
  const [formattedEvents, setFormattedEvents] = useState([]);



  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) 
        // {
        //   setFormattedEvents(data.events);
        // }
          
          {
          setFormattedEvents(
            data.data.map((event) => ({
              title: event.title,
              type: event.type,
              description: event.description,
              location: event.location,
              start: Converter(event.start),
              end: Converter(event.end),
              img_url: event.img_url,
            })),
          );
        } 

        else {
          console.error('Failed to fetch events:', data.message);
        }
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <>
      <div className="overflow-x-hidden bg-brand-primary-gold">
        <Header />
        <div className="w-screen">
          <div className="lg:w-[90vw] w-[80vw] h-[60vh] bg-white m-auto mt-[4vh] p-1">
            <div className="lg:w-[89vw] w-[79vw] h-[59vh]">
              <Calendar
                localizer={localizer}
                events={formattedEvents}
                startAccessor="start"
                endAccessor="end"
              />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
          <rect fill="#EDC736" width="1600" height="900" />
          <polygon fill="#6d442f" points="957 450 539 900 1396 900" />
          <polygon fill="#462d18" points="957 450 872.9 900 1396 900" />
          <polygon fill="#704630" points="-60 900 398 662 816 900" />
          <polygon fill="#482d18" points="337 900 398 662 816 900" />
          <polygon fill="#734831" points="1203 546 1552 900 876 900" />
          <polygon fill="#4b2e18" points="1203 546 1552 900 1162 900" />
          <polygon fill="#754932" points="641 695 886 900 367 900" />
          <polygon fill="#4d2e18" points="587 900 641 695 886 900" />
          <polygon fill="#784b33" points="1710 900 1401 632 1096 900" />
          <polygon fill="#502f18" points="1710 900 1401 632 1365 900" />
          <polygon fill="#7b4d34" points="1210 900 971 687 725 900" />
          <polygon fill="#522f18" points="943 900 1210 900 971 687" />
        </svg>
        <Footer />
      </div>
    </>
  );
}

export default BigCalendar;
