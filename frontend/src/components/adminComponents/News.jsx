import React, { useEffect, useState } from "react";
import Adder from "../adminComponents/actions/Adder";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const Converter = (utcData) => {
  const date = new Date(utcData);
  date.setHours(date.getHours() + 7); // Adjust timezone offset as needed
  return date;
};

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [editingNews, setEditingNews] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const formatted = data.data.map((news) => ({
            _id: news._id,
            title: news.title,
            description: news.description,
            date: Converter(news.date),
            location: news.location,
          }));
          formatted.sort((a, b) => new Date(b.date) - new Date(a.date));
          setNewsItems(formatted);
        } else {
          console.error("Failed to fetch news:", data.message);
        }
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const handleEdit = (news) => {
    setEditingNewsId(news._id);
    setEditingNews({ 
      ...news,
      date: news.date.toISOString().split('T')[0]
    });
  };

  const handleChange = (e) => {
    setEditingNews({ ...editingNews, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newsToSave = {
      ...editingNews,
      date: Converter(editingNews.date)
    };

    fetch(`http://localhost:5000/api/news/${editingNewsId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newsToSave),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedNews = newsItems.map((news) =>
            news._id === editingNewsId ? { ...newsToSave, _id: editingNewsId } : news
          );
          setNewsItems(updatedNews);
          setEditingNewsId(null);
          setEditingNews({});
        } else {
          console.error("Failed to update news:", data.message);
        }
      })
      .catch((err) => console.error("Error updating news:", err));
  };

  const handleDelete = (newsId) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      fetch(`http://localhost:5000/api/news/${newsId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setNewsItems(newsItems.filter((news) => news._id !== newsId));
          } else {
            console.error("Failed to delete news:", data.message);
          }
        })
        .catch((err) => console.error("Error deleting news:", err));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-400">News</h1>
      {newsItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news._id}
              className="bg-black rounded-lg h-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4 flex my-auto">
                <div className="m-[8px]">
                  {editingNewsId === news._id ? (
                    <>
                      <input
                        type="text"
                        name="title"
                        value={editingNews.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
                        placeholder="Title"
                      />
                      <textarea
                        name="description"
                        value={editingNews.description}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
                        rows="3"
                        placeholder="Description"
                      />
                      <input
                        type="text"
                        name="location"
                        value={editingNews.location || ""}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black mb-2"
                        placeholder="Location (optional)"
                      />
                      <input
                        type="date"
                        name="date"
                        value={editingNews.date}
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
                        onClick={() => setEditingNewsId(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mt-2 ml-2"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-l font-semibold text-white mb-2">{news.title}</h2>
                      <p className="text-sm text-white mb-2">{news.description}</p>
                      <p className="text-xs text-gray-300">
                        {news.date.toLocaleString()}
                        {news.location && ` - ${news.location}`}
                      </p>
                    </>
                  )}
                </div>
                <div className="m-auto flex gap-2">
                  {editingNewsId !== news._id && (
                    <>
                      <button
                        onClick={() => handleEdit(news)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        <FaEdit className="w-[2vw] h-[2vw]" />
                      </button>
                      <button
                        onClick={() => handleDelete(news._id)}
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
        <p className="text-center text-gray-500">No news available.</p>
      )}
      <div className="mt-8">
        <Adder type="new" /> 
      </div>
    </div>
  );
};

export default News;