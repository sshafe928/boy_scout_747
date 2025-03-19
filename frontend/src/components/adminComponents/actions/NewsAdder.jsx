import { React, useState } from 'react';

function NewsAdder() {
    const [formData, setFormData] = useState({
        title: '',
        type: "news",
        description: '',
        location: '',
        date: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('image', selectedFile);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('date', formData.date);

            const response = await fetch('http://localhost:5000/api/admin/uploadPhoto', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (data.success) {
                alert('News added successfully!');
                setFormData({
                    title: '',
                    type: "news",
                    description: '',
                    location: '',
                    date: '',
                });
                setSelectedFile(null);
                document.getElementById('image-upload').value = '';
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Failed to add news');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add News</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-2 border rounded" 
                />
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-2 border rounded h-20" 
                />
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Location (optional)" 
                    value={formData.location} 
                    onChange={handleChange} 
                    disabled={isLoading}
                    className="w-full p-2 border rounded" 
                />
                <input 
                    type="datetime-local" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-2 border rounded" 
                />
                <input 
                    id="image-upload" 
                    type="file" 
                    name="image" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    disabled={isLoading}
                    required
                    className="w-full p-2 border rounded" 
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full p-2 rounded ${
                        isLoading ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    {isLoading ? 'Adding...' : 'Add News'}
                </button>
            </form>
        </div>
    );
}

export default NewsAdder;