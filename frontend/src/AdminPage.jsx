import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from '../src/components/adminComponents/Events';
import VisitorCount from '../src/components/adminComponents/VisitorCount';
import Photos from '../src/components/adminComponents/Gallery';


const AdminPage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Events />
        <Photos />
        <VisitorCount />
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
