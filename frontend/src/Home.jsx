import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection3 from './components/HomeSection3';

function Home() {
    return (
        <>
          <Header/>
          <HomeSection3/>
          <div className="h-[150vh]"></div>
          <Footer/>
        </>
    );
}

export default Home;
