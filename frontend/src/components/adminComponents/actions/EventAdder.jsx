import { React, useState } from 'react';

function EventAdder() {
    const [formData, setFormData] = useState({
        title: '',
        type: "event",
        description: '',
        location: '',
        start: '',
        end: '',
        img_url: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.startsWith('image/')) {
            setError('Please select a valid image file (jpg, png, jpeg, gif)');
            return;
        }
        setSelectedFile(file);
        setError(null);
    };

    const validateForm = () => {
        const startDate = new Date(formData.start);
        const endDate = new Date(formData.end);
        if (!formData.title || !formData.type || !formData.description || !formData.location) {
            setError('All text fields are required');
            return false;
        }
        if (!formData.start || !formData.end) {
            setError('Start and end dates are required');
            return false;
        }
        if (startDate >= endDate) {
            setError('End date must be after start date');
            return false;
        }
        if (!selectedFile) {
            setError('Please select an image');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('image', selectedFile);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('start', formData.start);
            formDataToSend.append('end', formData.end);

            console.log('Sending data:', { ...formData, image: selectedFile });

            const response = await fetch('http://localhost:5000/api/admin/uploadPhoto', {
                method: 'POST',
                body: formDataToSend, 
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed! Status: ${response.status}, Response: ${errorText}`);
            }

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                alert('Event added successfully!');
                setFormData({
                    title: '',
                    type: '',
                    description: '',
                    location: '',
                    start: '',
                    end: '',
                    img_url: '',
                });
                setSelectedFile(null);
                document.getElementById('image-upload').value = ''; 
            } else {
                throw new Error(data.message || 'Event creation failed');
            }
        } catch (err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Event</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Event Title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <textarea 
                    name="description" 
                    placeholder="Event Description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24" 
                />
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Event Location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <div className="grid grid-cols-2 gap-4">
                    <input 
                        type="datetime-local" 
                        name="start" 
                        value={formData.start} 
                        onChange={handleChange} 
                        required 
                        disabled={isLoading}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                    />
                    <input 
                        type="datetime-local" 
                        name="end" 
                        value={formData.end} 
                        onChange={handleChange} 
                        required 
                        disabled={isLoading}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
                <label className="block">
                    <span className="text-gray-700">Upload Image:</span>
                    <input 
                        id="image-upload" 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        disabled={isLoading}
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 cursor-pointer" 
                        required 
                    />
                </label>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-3 rounded-lg transition duration-200 ${
                        isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default EventAdder;