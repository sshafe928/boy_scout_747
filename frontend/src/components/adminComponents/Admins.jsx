import React, { useEffect, useState } from 'react';

const Admins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/admin')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setAdmins(data.data);
                } else {
                    console.error('Failed to fetch admins:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching admins:', err));
    }, []);

    const deleteAdmin = (adminId) => {
        if (window.confirm('Are you sure you want to delete this admin?')) {
            fetch(`http://localhost:5000/api/admin/deleteAdmin/${adminId}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setAdmins(admins.filter(admin => admin._id !== adminId));
                    } else {
                        console.error('Failed to delete admin:', data.message);
                    }
                })
                .catch((err) => console.error('Error deleting admin:', err));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-bold text-center mb-8 text-amber-400">Admins</h1>
            
            {admins.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {admins.map((admin) => (
                        <div 
                            key={admin._id} 
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="p-4">
                                <h1>{admin.email}</h1>
                                <button
                                    onClick={() => deleteAdmin(admin._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors mt-4"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No admins available.</p>
            )}
        </div>
    );
};

export default Admins;