import React, { useEffect, useState } from 'react';
import Adder from "../adminComponents/actions/Adder"
const Converter = (utcData) => {
  const date = new Date(utcData);
  date.setHours(date.getHours() + 7); // Adjust timezone offset as needed
  return date;
};

const Events = () => {
  const [formattedEvents, setFormattedEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const formatted = data.data.map((event) => ({
            title: event.title,
            type: event.type,
            description: event.description,
            location: event.location,
            start: Converter(event.start),
            end: Converter(event.end),
            img_url: event.img_url,
          }));
          formatted.sort((a, b) => new Date(a.start) - new Date(b.start));
          setFormattedEvents(formatted);
        } else {
          console.error('Failed to fetch events:', data.message);
        }
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      {formattedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formattedEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {event.img_url && (
                <img 
                  src={event.img_url} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="space-y-1">
                  <p className="text-sm">
                    <strong className="text-gray-700">Type:</strong> {event.type}
                  </p>
                  <p className="text-sm">
                    <strong className="text-gray-700">Location:</strong> {event.location}
                  </p>
                  <p className="text-sm">
                    <strong className="text-gray-700">Start:</strong> {event.start.toLocaleString()}
                  </p>
                  <p className="text-sm">
                    <strong className="text-gray-700">End:</strong> {event.end.toLocaleString()}
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events available.</p>
      )}
      <div className="mt-8">
        <Adder type="event"/>
      </div>
    </div>
  );
};

export default Events;