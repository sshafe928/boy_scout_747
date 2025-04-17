import React, { useEffect, useState } from "react";
import Adder from "../adminComponents/actions/Adder";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const Converter = (utcData) => {
  const date = new Date(utcData);
  date.setHours(date.getHours() + 7);
  return date;
};

// Helper to format Date object to datetime-local input string
const formatDateForInput = (date) => {
  return date.toISOString().slice(0, 16); // Cuts off seconds and timezone
};

// Helper to adjust date back by 7 hours for consistency with Converter
const adjustDateForSave = (dateString) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() - 7); // Reverse the +7 from Converter
  return date;
};

const Events = () => {
  const [formattedEvents, setFormattedEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingEvent, setEditingEvent] = useState({});

  useEffect(() => {
    fetch("https://troop747backend.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const formatted = data.data.map((event) => ({
            _id: event._id,
            title: event.title,
            start: Converter(event.start),
            end: Converter(event.end),
            img_url: event.img_url,
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
    const { name, value } = e.target;
    if (name === "start" || name === "end") {
      setEditingEvent({ ...editingEvent, [name]: new Date(value) });
    } else {
      setEditingEvent({ ...editingEvent, [name]: value });
    }
  };

  const handleSave = () => {
    const adjustedEvent = {
      ...editingEvent,
      start: adjustDateForSave(editingEvent.start),
      end: adjustDateForSave(editingEvent.end),
    };

    fetch(`https://troop747backend.onrender.com/api/events/${editingEventId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adjustedEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedEvents = formattedEvents.map((event) =>
            event._id === editingEventId
              ? { ...editingEvent, _id: editingEventId, start: Converter(adjustedEvent.start), end: Converter(adjustedEvent.end) }
              : event
          );
          setFormattedEvents(updatedEvents);
          setEditingEventId(null);
          setEditingEvent({});
        } else {
          console.error("Failed to update event:", data.message);
        }
      })
      .catch((err) => console.error("Error updating event:", err));
  };

  const handleDelete = (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      fetch(`https://troop747backend.onrender.com/api/events/${eventId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setFormattedEvents(formattedEvents.filter((event) => event._id !== eventId));
          } else {
            console.error("Failed to delete event:", data.message);
          }
        })
        .catch((err) => console.error("Error deleting event:", err));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-400">Events</h1>
      {formattedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formattedEvents.map((event) => (
            <div
              key={event._id}
              className="bg-black rounded-lg h-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative">
                {event.img_url && (
                  <img
                    src={event.img_url}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
                  />
                )}
              </div>
              <div className="p-4 flex my-auto">
                <div className="m-[8px] flex-1">
                  {editingEventId === event._id ? (
                    <>
                      <input
                        type="text"
                        name="title"
                        value={editingEvent.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
                      />
                      <input
                        type="text"
                        name="img_url"
                        value={editingEvent.img_url || ""}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full border p-2 rounded text-black mb-2"
                      />
                      <input
                        type="datetime-local"
                        name="start"
                        value={formatDateForInput(editingEvent.start)}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
                      />
                      <input
                        type="datetime-local"
                        name="end"
                        value={formatDateForInput(editingEvent.end)}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
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
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      >
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