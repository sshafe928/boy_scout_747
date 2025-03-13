import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from '../src/components/adminComponents/Events';
import VisitorCount from '../src/components/adminComponents/VisitorCount';
import Photos from '../src/components/adminComponents/Gallery';

// Optional: Example Converter function if you need date formatting later
// const Converter = (dateString) => new Date(dateString).toISOString();

const AdminPage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Events />
        <VisitorCount />
        <Photos />
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
