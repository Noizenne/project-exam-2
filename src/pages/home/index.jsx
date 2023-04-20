import React, { useEffect, useState } from 'react'
import { StyledHome } from '../../styles/Home.styles';
import { API_URL } from '../../api/constants/url';
import { API_venues } from '../../api/constants/url';
import Venues from '../../components/Venues';
function Home() {

  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setVenues(json);
      } catch(error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    document.title = "Holidaze | Home";
    getVenues(API_URL + API_venues)
  }, []);

  return (
    <StyledHome>
      <div className='hero'>
        <div className='mask'></div>
        <div className='hero-inner'>
          <div className='hero-center'>
          <h1>Find the best place for you.</h1>
          <p>Book your next vacation with us and let us help you make it a trip of a lifetime!</p>
          <button>BROWSE</button>
          </div>
        </div>
      </div>
      <div className='venuesContainer'>
        <h2>Venues</h2>
        <Venues venues={venues}/>
      </div>
    </StyledHome>
  )
}

export default Home;