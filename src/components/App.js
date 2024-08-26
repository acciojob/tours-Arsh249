import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://your-api-url.com/tours');
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching tours:', error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main id='main'>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
          <button id='delete-btn-rec6d6T3q5EBIdCfD'>Delete</button>
          <p id='tour-item-para-rec6d6T3q5EBIdCfD'>Ok</p>
        </div>
      </main>
    );
  }

  return (
    <main id='main'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
