import React, { useEffect, useState } from "react";
import Adder from "../adminComponents/actions/Adder";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const Converter = (utcData) => {
  const date = new Date(utcData);
  date.setHours(date.getHours() + 7); // Adjust timezone offset as needed
  return date;
};

const Events = () => {
  const [formattedEvents, setFormattedEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingEvent, setEditingEvent] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const formatted = data.data.map((event) => ({
            _id: event._id, // Ensure ID is stored
            title: event.title,
            start: Converter(event.start),
            end: Converter(event.end),
          }));
          formatted.sort((a, b) => new Date(a.start) - new Date(b.start));
          setFormattedEvents(formatted);
        } else {
          console.error("Failed to fetch events:", data.message);
        }
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleEdit = (event) => {
    setEditingEventId(event._id);
    setEditingEvent({ ...event });
  };

  const handleChange = (e) => {
    setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/api/events/${editingEventId}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedEvents = formattedEvents.map((event) =>
            event._id === editingEventId ? { ...editingEvent, _id: editingEventId } : event
          );
          setFormattedEvents(updatedEvents);
          setEditingEventId(null);
          setEditingEvent(null);
        } else {
          console.error("Failed to update event:", data.message);
        }
      })
      .catch((err) => console.error("Error updating event:", err));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      {formattedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formattedEvents.map((event) => (
            <div
              key={event._id}
              className="bg-black rounded-lg h-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4 flex my-auto">
                <div className="m-[8px]">
                  {editingEventId === event._id ? (
                    // Editable Fields
                    <>
                      <input
                        type="text"
                        name="title"
                        value={editingEvent.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black"
                      />
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingEventId(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mt-2 ml-2"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    // Normal Display Mode
                    <>
                      <h2 className="text-l font-semibold text-white mb-2">{event.title}</h2>
                      <p className="text-xs text-white">
                        {event.start.toLocaleString()} - {event.end.toLocaleString()}
                      </p>
                    </>
                  )}
                </div>
                <div className="m-auto flex gap-2">
                  {editingEventId !== event._id && (
                    <>
                      <button
                        onClick={() => handleEdit(event)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        <FaEdit className="w-[2vw] h-[2vw]" />
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                        <FaRegTrashAlt className="w-[2vw] h-[2vw]" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events available.</p>
      )}
      <div className="mt-8">
        <Adder type="event" />
      </div>
    </div>
  );
};

export default Events;
