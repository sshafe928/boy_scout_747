import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeMain from './components/HomeMain';

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function Home() {
  useEffect(() => {
    fetch('https://abacus.jasoncameron.dev/hit/y8185CimdZpgTucM/O8zrJPxwL_pmSGkN')
      .then(res => res.json())
      .then(data => console.log('Total visits:', data.value))
      .catch(err => console.error('Error hitting total counter:', err));

    if (!localStorage.getItem('uniqueVisited')) {
      fetch('https://abacus.jasoncameron.dev/hit/y8185CimdZpgTucM/unique_home')
        .then(res => res.json())
        .then(data => {
          console.log('Unique visits:', data.value);
          localStorage.setItem('uniqueVisited', 'true');
        })
        .catch(err => console.error('Error hitting unique counter:', err));
    }

    if (isMobile()) {
      fetch('https://abacus.jasoncameron.dev/hit/y8185CimdZpgTucM/mobile')
        .then(res => res.json())
        .then(data => console.log('Mobile visits:', data.value))
        .catch(err => console.error('Error hitting mobile counter:', err));
    } else {
      fetch('https://abacus.jasoncameron.dev/hit/y8185CimdZpgTucM/desktop')
        .then(res => res.json())
        .then(data => console.log('Desktop visits:', data.value))
        .catch(err => console.error('Error hitting desktop counter:', err));
    }
  }, []);

  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
    </>
  );
}

export default Home;
