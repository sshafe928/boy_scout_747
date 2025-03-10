import Header from './components/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './scss/calendar.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import mountains from './assets/flat-mountains.png'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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
{/* Bottom half of the webpage */}
        <div className="mb-[-5rem] lg:mb-[-25rem]">

          {selectedEvent && (
            <div className="relative top-[5rem] p-2 lg:w-[70vw] w-[80vw] m-auto mb-0 bg-white border rounded-lg text-center z-50" id="eventer">    
              <img src={selectedEvent.img_url} alt={selectedEvent.title} className="rounded-[10px] lg:place-self-center lg:mt-5 lg:w-[60vw]" />
              <h2 className="text-[1.5rem] font-bold mt-[1rem]">{selectedEvent.title}</h2>
              <p className="mt-[0.5rem]"> {selectedEvent.description}</p>
              <p className="text-left mt-[1rem] ml-[1rem]"><strong>Type:</strong> {selectedEvent.type}</p>
              <p className="text-left ml-[1rem]"><strong>Location:</strong> {selectedEvent.location}</p>
              <p className="text-left ml-[1rem]"><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
              <p className="text-left ml-[1rem]"><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
              <button onClick={() => Changer(-1)} className="bg-[#EBBA00] text-white px-4 py-2 rounded mt-4 mr-[10rem] lg:mr-[50rem]">
                <FaArrowLeft />
              </button>
              <button onClick={() => Changer(1)} className="bg-[#EBBA00] text-white px-4 py-2 rounded mt-4">
                <FaArrowRight />
              </button>
          </div>
          )}

          <img src={mountains} alt="Flat Mountains" className="relative top-[-5rem] mb-0 z-10 lg:top-[-45rem]"/>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default BigCalendar;
