import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Dummy Converter function (replace with your actual implementation)
const Converter = (dateString) => new Date(dateString).toISOString();

const AdminPage = () => {
    const [newsList, setNewsList] = useState([]);
    const [news, setNews] = useState({
        title: '',
        description: '',
        img_url: '',
    });
    const [galleryList, setGalleryList] = useState([]);
    const [gallery, setGallery] = useState({
        title: '',
        url: '',
        description: '',
    });
    const [eaglesList, setEaglesList] = useState([])
    const [eagles, setEagles] = useState({
        name: '',
        img_url: '',
        description: '',
        rank: '',
    })
    const [eventsList, setEventsList] = useState([]);
    const [adminList, setAdminList] = useState([]);
    const [eagleList, setEagleList] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [editingNews, setEditingNews] = useState(null);
    const [editingGallery, setEditingGallery] = useState(null);
    const [editingEvent, setEditingEvent] = useState(null);
    const [editingEagle, setEditingEagle] = useState(null);
    const [pageSize] = useState(10);

    // Fetch news data
    useEffect(() => {
        fetch('http://localhost:5000/api/news')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const newsData = data.data.map((event) => ({
                        id: event._id,
                        title: event.title,
                        description: event.description,
                        location: event.location,
                    }));
                    setNewsList(newsData);
                } else {
                    console.error('Failed to fetch news:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching news:', err));
    }, []);

    // Fetch admin data
    useEffect(() => {
        fetch('http://localhost:5000/api/admin')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const adminData = data.data.map((admin) => ({
                        id: admin._id,
                        email: admin.email,
                    }));
                    setAdminList(adminData);
                } else {
                    console.error('Failed to fetch news:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching news:', err));
    }, []);

    // Fetch eagle data
    useEffect(() => {
        fetch('http://localhost:5000/api/eagles')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const eagleData = data.data.map((eagle) => ({
                        id: eagle._id,
                        name: eagle.name,
                        rank: eagle.rank,
                        description: eagle.description,
                        img_url: eagle.img_url,
                        date: eagle.date,
                    }));
                    setEagleList(eagleData);
                } else {
                    console.error('Failed to fetch news:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching news:', err));
    }, []);

    // Fetch photos data
    useEffect(() => {
        fetch('http://localhost:5000/api/photos')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const formattedPhotos = data.data.map((photo) => ({
                        id: photo._id,
                        name: photo.title,
                        url: photo.image_url,
                        description: photo.description,
                    }));
                    setGalleryList(formattedPhotos);
                } else {
                    console.error('Failed to fetch photos:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching photos:', err));
    }, [pageSize]);

    // Fetch events data
    useEffect(() => {
        fetch('http://localhost:5000/api/events')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const formatted = data.data.map((event) => ({
                        id: event._id,
                        title: event.title,
                        type: event.type,
                        description: event.description,
                        location: event.location,
                        start: Converter(event.start),
                        end: Converter(event.end),
                        img_url: event.img_url,
                    }));
                    formatted.sort((a, b) => new Date(a.start) - new Date(b.start));
                    setEventsList(formatted);
                    setSelectedEvent(formatted[0] || null);
                } else {
                    console.error('Failed to fetch events:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching events:', err));
    }, []);

    // Handle news submission
    const handleNewsSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newNews = {
            title: formData.get('title'),
            description: formData.get('description'),
            location: formData.get('location'),
        };
        setNews(newNews);
        fetch('http://localhost:5000/api/news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newNews),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setNewsList([...newsList, { ...newNews, id: data.data._id }]);
                } else {
                    console.error('Failed to add news:', data.message);
                }
            })
            .catch((err) => console.error('Error sending news:', err));
        e.target.reset();
    };

    // Handle photo submission
    const handlePhotoSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPhoto = {
            title: formData.get('name'),
            img_url: formData.get('image-upload'),
            description: formData.get('description'),
        };
        setGallery(newPhoto);
        fetch('http://localhost:5000/api/photos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPhoto),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setGalleryList([...galleryList, { ...newPhoto, id: data.data._id }]);
                } else {
                    console.error('Failed to add photo:', data.message);
                }
            })
            .catch((err) => console.error('Error sending photo:', err));
        e.target.reset();
    };

    // Handle event submission
    const handleEventSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newEvent = {
            title: formData.get('title'),
            type: formData.get('type'),
            description: formData.get('description'),
            location: formData.get('location'),
            start: formData.get('start'),
            end: formData.get('end'),
            img_url: formData.get('img_url'),
        };
        setSelectedEvent(newEvent);
        fetch('http://localhost:5000/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const formattedEvent = { ...newEvent, id: data.data._id, start: Converter(newEvent.start), end: Converter(newEvent.end) };
                    const updatedEvents = [...eventsList, formattedEvent].sort((a, b) => new Date(a.start) - new Date(b.start));
                    setEventsList(updatedEvents);
                } else {
                    console.error('Failed to add event:', data.message);
                }
            })
            .catch((err) => console.error('Error sending event:', err));
        e.target.reset();
    };

    // Handle eagle submission
    const handleEagleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newEagle = {
            name: formData.get('name'),
            rank: formData.get('rank'),
            description: formData.get('description'),
            img_url: formData.get('img_url'),
            date: formData.get('date'),
        };
        setEagles(newEagle);
        fetch('http://localhost:5000/api/eagles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEagle),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setEventsList([...eaglesList, { ...newEagle, id: data.data._id }]);
                } else {
                    console.error('Failed to add eagle:', data.message);
                }
            })
            .catch((err) => console.error('Error sending event:', err));
        e.target.reset();
    };

    // Handle news edit save
    const handleNewsEditSave = (id, updatedNews) => {
        fetch(`http://localhost:5000/api/news/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedNews),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setNewsList(newsList.map((item) => (item.id === id ? { ...item, ...updatedNews } : item)));
                    setEditingNews(null);
                } else {
                    console.error('Failed to update news:', data.message);
                }
            })
            .catch((err) => console.error('Error updating news:', err));
    };

    // Handle gallery edit save
    const handleGalleryEditSave = (id, updatedGallery) => {
        fetch(`http://localhost:5000/api/photos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedGallery),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setGalleryList(galleryList.map((item) => (item.id === id ? { ...item, ...updatedGallery } : item)));
                    setEditingGallery(null);
                } else {
                    console.error('Failed to update photo:', data.message);
                }
            })
            .catch((err) => console.error('Error updating photo:', err));
    };

    // Handle event edit save
    const handleEventEditSave = (id, updatedEvent) => {
        fetch(`http://localhost:5000/api/events/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEvent),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const formattedEvent = { ...updatedEvent, start: Converter(updatedEvent.start), end: Converter(updatedEvent.end) };
                    const updatedEvents = eventsList.map((item) => (item.id === id ? { ...item, ...formattedEvent } : item))
                        .sort((a, b) => new Date(a.start) - new Date(b.start));
                    setEventsList(updatedEvents);
                    setEditingEvent(null);
                } else {
                    console.error('Failed to update event:', data.message);
                }
            })
            .catch((err) => console.error('Error updating event:', err));
    };

    return (
        <div className="p-5">
            <Header />

            {/* News Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">News Section</h2>
                <div className="grid grid-cols-4 gap-5">
                    {news.title && (
                        <div className="border rounded-lg p-4 shadow-md bg-white">
                            <h4 className="text-lg font-medium mb-2">{news.title}</h4>
                            <p className="mb-2">{news.description}</p>
                            <p className="italic">{news.location}</p>
                        </div>
                    )}
                </div>
                {newsList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {newsList.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 shadow-md bg-white">
                                {editingNews === item.id ? (
                                    <>
                                        <input type="text" defaultValue={item.title} onChange={(e) => (item.title = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={item.description} onChange={(e) => (item.description = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={item.location} onChange={(e) => (item.location = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <button onClick={() => handleNewsEditSave(item.id, { title: item.title, description: item.description, location: item.location })} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
                                        <button onClick={() => setEditingNews(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                                        <p className="mb-2">{item.description}</p>
                                        <p className="italic mb-2">{item.location}</p>
                                        <button onClick={() => setEditingNews(item.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No news items yet.</p>
                )}
                <form onSubmit={handleNewsSubmit} className="mt-5 flex gap-2">
                    <input type="text" name="title" placeholder="Title" className="p-2 border rounded" />
                    <input type="text" name="description" placeholder="Description" className="p-2 border rounded" />
                    <input type="text" name="location" placeholder="Location" className="p-2 border rounded" />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit News</button>
                </form>
            </div>

            {/* Photos Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Photos Section</h2>
                <h3 className="text-xl font-semibold mb-2">Latest Photo:</h3>
                <div className="grid grid-cols-4 gap-5">
                    {gallery.url && (
                        <div className="border rounded-lg p-4 shadow-md bg-white text-center">
                            <img src={gallery.url} alt={gallery.name} className="w-full h-auto mb-2" />
                            <h4 className="text-lg font-medium mb-2">{gallery.name}</h4>
                            <p>{gallery.description}</p>
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">Photo Gallery:</h3>
                {galleryList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {galleryList.map((photo) => (
                            <div key={photo.id} className="border rounded-lg p-4 shadow-md bg-white text-center">
                                {editingGallery === photo.id ? (
                                    <>
                                        <input type="text" defaultValue={photo.name} onChange={(e) => (photo.name = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={photo.url} onChange={(e) => (photo.url = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={photo.description} onChange={(e) => (photo.description = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <button onClick={() => handleGalleryEditSave(photo.id, { name: photo.name, url: photo.url, description: photo.description })} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
                                        <button onClick={() => setEditingGallery(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <img src={photo.url} alt={photo.name} className="w-full h-auto mb-2" />
                                        <h4 className="text-lg font-medium mb-2">{photo.name}</h4>
                                        <p className="mb-2">{photo.description}</p>
                                        <button onClick={() => setEditingGallery(photo.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No photos yet.</p>
                )}
                <form onSubmit={handlePhotoSubmit} className="mt-5 flex gap-2">
                    <input type="text" name="name" placeholder="Photo Name" className="p-2 border rounded" />
                    <input type="file" id="image-upload" name="image" accept="image/*" required />
                    <input type="text" name="description" placeholder="Description" className="p-2 border rounded" />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit Photo</button>
                </form>
            </div>

            {/* Events Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Events Section</h2>
                <div className="grid grid-cols-4 gap-5">
                
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">Events List:</h3>
                {eventsList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {eventsList.map((event) => (
                            <div key={event.id} className="border rounded-lg p-4 shadow-md bg-white">
                                {editingEvent === event.id ? (
                                    <>
                                        <input type="text" defaultValue={event.title} onChange={(e) => (event.title = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={event.type} onChange={(e) => (event.type = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={event.description} onChange={(e) => (event.description = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={event.location} onChange={(e) => (event.location = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="datetime-local" defaultValue={event.start.slice(0, 16)} onChange={(e) => (event.start = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="datetime-local" defaultValue={event.end.slice(0, 16)} onChange={(e) => (event.end = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={event.img_url} onChange={(e) => (event.img_url = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <button onClick={() => handleEventEditSave(event.id, { title: event.title, type: event.type, description: event.description, location: event.location, start: event.start, end: event.end, img_url: event.img_url })} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
                                        <button onClick={() => setEditingEvent(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {event.img_url && <img src={event.img_url} alt={event.title} className="w-full h-auto mb-2" />}
                                        <h4 className="text-lg font-medium mb-2">{event.title}</h4>
                                        <p className="mb-2"><strong>Type:</strong> {event.type}</p>
                                        <p className="mb-2">{event.description}</p>
                                        <p className="italic mb-2">{event.location}</p>
                                        <p className="mb-2"><strong>Start:</strong> {new Date(event.start).toLocaleString()}</p>
                                        <p className="mb-2"><strong>End:</strong> {new Date(event.end).toLocaleString()}</p>
                                        <button onClick={() => setEditingEvent(event.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No events yet.</p>
                )}
                <form onSubmit={handleEventSubmit} className="mt-5 flex gap-2 flex-wrap">
                    <input type="text" name="title" placeholder="Title" className="p-2 border rounded" />
                    <input type="text" name="type" placeholder="Type" className="p-2 border rounded" />
                    <input type="text" name="description" placeholder="Description" className="p-2 border rounded" />
                    <input type="text" name="location" placeholder="Location" className="p-2 border rounded" />
                    <input type="datetime-local" name="start" className="p-2 border rounded" />
                    <input type="datetime-local" name="end" className="p-2 border rounded" />
                    <input type="text" name="img_url" placeholder="Image URL" className="p-2 border rounded" />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit Event</button>
                </form>
            </div>

            {/* Eagle Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Eagles Section</h2>
                <div className="grid grid-cols-4 gap-5">
                
                </div>
                {eagleList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {eagleList.map((eagle) => (
                            <div key={eagle.id} className="border rounded-lg p-4 shadow-md bg-white">
                                {editingEagle === eagle.id ? (
                                    <>
                                        <input type="text" defaultValue={eagle.name} onChange={(e) => (eagle.name = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={eagle.description} onChange={(e) => (eagle.description = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={eagle.rank} onChange={(e) => (eagle.rank = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={eagle.date} onChange={(e) => (eagle.date = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <input type="text" defaultValue={eagle.img_url} onChange={(e) => (eagle.img_url = e.target.value)} className="mb-2 w-full p-2 border rounded" />
                                        <button onClick={() => handleEventEditSave(eagle.id, { name: eagle.name, rank: eagle.rank, description: eagle.description, img_url: eagle.img_url })} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
                                        <button onClick={() => setEditingEagle(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {eagle.img_url && <img src={eagle.img_url} alt={eagle.name} className="w-full h-auto mb-2" />}
                                        <h4 className="text-lg font-medium mb-2">{eagle.name}</h4>
                                        <p className="mb-2"><strong>Rank: </strong> {eagle.rank}</p>
                                        <p className="mb-2"><strong>Year Achieved: </strong> {eagle.date}</p>
                                        <p className="mb-2">{eagle.description}</p>
                                        <button onClick={() => setEditingEagle(eagle.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Eagles found.</p>
                )}
                <form onSubmit={handleEagleSubmit} className="mt-5 flex gap-2 flex-wrap">
                    <input type="text" name="name" placeholder="Name" className="p-2 border rounded" />
                    <input type="text" name="rank" placeholder="Rank" className="p-2 border rounded" />
                    <input type="text" name="date" placeholder="Date" className="p-2 border rounded" />
                    <input type="text" name="description" placeholder="Description" className="p-2 border rounded" />
                    <input type="text" name="img_url" placeholder="Image URL" className="p-2 border rounded" />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit Eagle</button>
                </form>
            </div>

            {/* Admin Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Admins Section</h2>
                <div className="grid grid-cols-4 gap-5">
                
                </div>
                {adminList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {adminList.map((admin) => (
                            <div key={admin.id} className="border rounded-lg p-4 shadow-md bg-white">
                                    <>
                                        <h4 className="text-lg font-medium mb-2">{admin.email}</h4>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                                    </>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No admins found.</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default AdminPage;