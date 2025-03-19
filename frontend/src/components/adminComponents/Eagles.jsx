import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import Adder from "../adminComponents/actions/Adder";

const Eagles = () => {
  const [eagles, setEagles] = useState([]);
  const [editingEagleId, setEditingEagleId] = useState(null);
  const [editingEagle, setEditingEagle] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/eagles")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEagles(data.data);
        } else {
          console.error("Failed to fetch eagle scouts:", data.message);
        }
      })
      .catch((err) => console.error("Error fetching eagle scouts:", err));
  }, []);

  const handleEdit = (eagle) => {
    setEditingEagleId(eagle._id);
    setEditingEagle({ ...eagle });
  };

  const handleChange = (e) => {
    setEditingEagle({ ...editingEagle, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/api/eagles/${editingEagleId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingEagle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedEagles = eagles.map((eagle) =>
            eagle._id === editingEagleId ? { ...editingEagle, _id: editingEagleId } : eagle
          );
          setEagles(updatedEagles);
          setEditingEagleId(null);
          setEditingEagle({});
        } else {
          console.error("Failed to update eagle scout:", data.message);
        }
      })
      .catch((err) => console.error("Error updating eagle scout:", err));
  };

  const handleDelete = (eagleId) => {
    if (window.confirm("Are you sure you want to delete this Eagle Scout?")) {
      fetch(`http://localhost:5000/api/eagles/${eagleId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setEagles(eagles.filter((eagle) => eagle._id !== eagleId));
          } else {
            console.error("Failed to delete eagle scout:", data.message);
          }
        })
        .catch((err) => console.error("Error deleting eagle scout:", err));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">Eagle Scouts</h1>
      {eagles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eagles.map((eagle) => (
            <div
              key={eagle._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {eagle.img_url && (
                <img src={eagle.img_url} alt={eagle.name} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                {editingEagleId === eagle._id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={editingEagle.name}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="rank"
                      value={editingEagle.rank}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Rank"
                    />
                    <textarea
                      name="description"
                      value={editingEagle.description}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Description"
                    />
                    <input
                      type="text"
                      name="img_url"
                      value={editingEagle.img_url}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Image URL"
                    />
                    <input
                      type="date"
                      name="date"
                      value={editingEagle.date ? editingEagle.date.split('T')[0] : ''}
                      onChange={handleChange}
                      className="w-full border p-2 rounded mb-2"
                      placeholder="Date"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingEagleId(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-gray-800">{eagle.name}</h2>
                    <p className="text-sm text-gray-500">Rank: {eagle.rank}</p>
                    <p className="text-gray-700 mt-2">{eagle.description}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Date: {new Date(eagle.date).toLocaleDateString()}
                    </p>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => handleEdit(eagle)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(eagle._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Eagle Scouts available.</p>
      )}
      <div className="mt-8">
        <Adder type="eagle" />
      </div>
    </div>
  );
};

export default Eagles;