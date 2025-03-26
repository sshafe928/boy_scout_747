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
      <main className="p-4" style={{backgroundImage: 'url(https://res.cloudinary.com/dmrevelyc/image/upload/v1740607699/Animated_Shape_3_vagk64.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Events />
        <Photos />
        <Eagles />
        <Admins />
        <News />
        <VisitorCount />

      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
