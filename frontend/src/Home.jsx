import Header from './components/Header';
import HomeSection1 from './components/HomeSection1';
import Footer from './components/Footer';
import HomeSection3 from './components/HomeSection3';

function Home() {
    return (
        <>
          <Header/>
          <HomeSection3/>
          <div className="h-[150vh]"></div>
          <HomeSection1/>
          <Footer/>
        </>
    );
}

export default Home;
