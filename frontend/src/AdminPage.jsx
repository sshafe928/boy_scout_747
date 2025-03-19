import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from '../src/components/adminComponents/Events';
import VisitorCount from '../src/components/adminComponents/VisitorCount';
import Photos from '../src/components/adminComponents/Gallery';
import Admins from "../src/components/adminComponents/Admins";
import News from "../src/components/adminComponents/News"
import Eagles from "../src/components/adminComponents/Eagles"
const AdminPage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Events />
        <Photos />
        <Eagles />
        <Admins />
        <VisitorCount />
        <News />

      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
