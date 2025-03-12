import Header from './components/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './scss/calendar.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
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

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    
    const section = document.getElementById("eventer");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
  
      const offset = window.innerHeight / 1 - section.offsetHeight / 2;
      window.scrollBy({ top: offset, behavior: "smooth" });
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
    <Header />
      <div className="overflow-x-hidden h-auto bg-brand-primary-gold pb-16" style={{backgroundImage: 'url(https://res.cloudinary.com/dipxoeh1d/image/upload/v1741729728/flat-mountains_bl2v3j.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
        <div className="w-full">
          <div className=" w-[90vw] h-[60vh] md:w-[70vw] md:h-[80vh] bg-white m-auto rounded-lg mt-[4vh] p-1">
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

          {selectedEvent && (
            <div className="relative top-[10vh] p-4 lg:w-[80vw] w-[90vw] m-auto bg-white bg-opacity-75 border rounded-lg text-center z-50 mb-[10vh]" id="eventer">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-[40%] w-full mb-4 lg:mb-0">
                <img src={selectedEvent.img_url} alt={selectedEvent.title} className="rounded-[10px] lg:w-full lg:h-auto object-cover" />
              </div>

              <div className="lg:w-[55%] w-full lg:ml-8 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <button onClick={() => Changer(-1)} className="bg-[#EBBA00] text-white px-4 py-2 rounded">
                    <FaArrowLeft />
                  </button>
                  
                  <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                  
                  <button onClick={() => Changer(1)} className="bg-[#EBBA00] text-white px-4 py-2 rounded">
                    <FaArrowRight />
                  </button>
                </div>
          
                <p className="my-8 text-lg">{selectedEvent.description}</p>
          
                <div className="mt-auto  mb-4">
                  <p className="text-sm"><strong>Type:</strong> {selectedEvent.type}</p>
                  <p className="text-sm"><strong>Location:</strong> {selectedEvent.location}</p>
                  <p className="text-sm"><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
                  <p className="text-sm"><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

        
      </div>
      <Footer />
    </>
  );
}

export default BigCalendar;
