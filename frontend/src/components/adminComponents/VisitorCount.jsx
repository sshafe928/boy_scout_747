import React, { useState, useEffect } from 'react';

const VisitorCount = () => {
  const [stats, setStats] = useState({
    total: null,
    unique: null,
    mobile: null,
    desktop: null,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCounter = (key, setter, errMsg) => {
      fetch(`https://abacus.jasoncameron.dev/get/y8185CimdZpgTucM/${key}`)
        .then(res => {
          if (!res.ok) throw new Error(errMsg);
          return res.json();
        })
        .then(data => setter(prev => ({ ...prev, [key]: data.value })))
        .catch(err => {
          console.error(`Error fetching ${key}:`, err);
          setError(`Failed to fetch ${key}.`);
        });
    };

    fetchCounter('O8zrJPxwL_pmSGkN', setStats, 'Total counter fetch failed');
    fetchCounter('unique_home', setStats, 'Unique counter fetch failed');
    fetchCounter('mobile', setStats, 'Mobile counter fetch failed');
    fetchCounter('desktop', setStats, 'Desktop counter fetch failed');
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded my-4 w-1/3 m-[33%]">
      <h2 className="text-4xl font-bold mb-2 text-amber-400">Home Page Visit Statistics</h2>
      {error && <p className="text-red-500">{error}</p>}
      {stats.O8zrJPxwL_pmSGkN !== null &&
      stats.unique_home !== null &&
      stats.mobile !== null &&
      stats.desktop !== null ? (
        <>
          <p className="text-2xl">Total visits: {stats.O8zrJPxwL_pmSGkN}</p>
          <p className="text-2xl">Unique visits: {stats.unique_home}</p>
          <p className="text-2xl">Mobile visits: {stats.mobile}</p>
          <p className="text-2xl">Desktop visits: {stats.desktop}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VisitorCount;
