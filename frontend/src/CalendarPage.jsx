import Header from './components/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './scss/calendar.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';

const localizer = momentLocalizer(moment);
let formatted
const Converter = (utcData) =>{
  const date = new Date(utcData);
  date.setHours(date.getHours() +7);
  return date;
}


function BigCalendar() {
  const [formattedEvents, setFormattedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [index, setIndex] = useState(0)


  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          formatted = data.data.map((event) => ({
            title: event.title,
            type: event.type,
            description: event.description,
            location: event.location,
            start: Converter(event.start),
            end: Converter(event.end),
            img_url: event.img_url
          }));
          formatted.sort((a,b) => new Date(a.start) - new Date(b.start))
          setFormattedEvents(formatted);
          
          setSelectedEvent(formatted[0]);
        } 

        else {
          console.error('Failed to fetch events:', data.message);
        }
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  const handleEventClick = (event) =>{
    setSelectedEvent(event);
  }

  const Changer = (Value) =>{
    let newIndex = index + Value;

    if(newIndex < 0){
      newIndex = 0
    } else if (newIndex >= formatted.length){
      newIndex = 0
    }
    setIndex(newIndex)
    setSelectedEvent(formatted[newIndex]);

  }  
  return (
    <>
      <div className="overflow-x-hidden bg-brand-primary-gold">
        <Header />
        <div className="w-screen">
          <div className=" w-[90vw] h-[60vh] md:w-[70vw] md:h-[80vh] bg-white m-auto mt-[4vh] p-1">
            <div className=" w-[89vw] h-[59vh] md:w-[69vw] md:h-[79vh]">
              <Calendar
                localizer={localizer}
                events={formattedEvents}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={handleEventClick}
              />
            </div>
          </div>
        </div>
        {selectedEvent && (
  <div className="mt-4 p-2 lg:w-[90vw] w-[80vw] m-auto bg-white border rounded-lg text-center">    
    <img src={selectedEvent.img_url} alt={selectedEvent.title} />
    <h2 className="text-xl font-bold">{selectedEvent.title}</h2>
    <p><strong>Type:</strong> {selectedEvent.type}</p>
    <p><strong>Description:</strong> {selectedEvent.description}</p>
    <p><strong>Location:</strong> {selectedEvent.location}</p>
    <p><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
    <p><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
    <button 
  onClick={() => Changer(-1)} 
  className="bg-red-500 text-white px-4 py-2 rounded mt-4"
>
  Prev
</button>
<button 
  onClick={() => Changer(1)} 
  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
>
  Next
</button>

  </div>
)}
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
