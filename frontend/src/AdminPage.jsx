import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const AdminPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!title || !description) {
            setMessage('Title and description are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    location,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Created successfully');
                setTitle('');
                setDescription('');
                setLocation('');
            } else {
                setMessage(data.message || 'Failed to create news');
            }
        } catch (error) {
            console.error('Error creating news:', error);
            setMessage('An error occurred while creating the news');
        }
    };

    return (
        <div>
            <Header/>
            <h2>Create News</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <button type="submit">Create News</button>
            </form>
            {message && <p>{message}</p>}
            <Footer/>
        </div>
    );
};

export default AdminPage;