import Header from './components/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './scss/calendar.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import mountains from './assets/flat-mountains.png'

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
      const section = document.getElementById("eventer")
      if(section){
        section.scrollIntoView({ behavior: "smooth" });
      }

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
      <div className="overflow-x-hidden h-auto bg-brand-primary-gold">
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
                href="#eventer"
              />
            </div>
          </div>
        </div>
<div>
        {selectedEvent && (
  <div className="mt-4 p-2 lg:w-[90vw] w-[80vw] m-auto bg-white border rounded-lg text-center" id="eventer">    
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
  <img src={mountains} alt="Flat Mountains" />
</div>
        <Footer />
      </div>
    </>
  );
}

export default BigCalendar;
