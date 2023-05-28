import React, { useEffect, useState } from "react";
import { StyledHome } from "../../styles/Home.styles";
import { API_URL } from "../../api/constants/url";
import { API_venues } from "../../api/constants/url";
import Venues from "../../components/Venues";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/Error";

function Home() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredVenues, setFilteredVenues] = useState([]);

  useEffect(() => {
    async function getVenues(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setVenues(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    document.title = "Holidaze | Home";
    getVenues(API_URL + API_venues);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  function onSearchInputChange(value) {
    setSearchInput(value);
    const result = venues.filter((venue) => {
      return value && venue.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredVenues(result);
  }

  return (
    <StyledHome>
      <div className="hero">
        <div className="mask"></div>
        <div className="hero-inner">
          <div className="hero-center">
            <h1>Find the best place for you.</h1>
            <p>
              Book your next vacation with us and let us help you make it a trip
              of a lifetime!
            </p>
            <div className="search">
              <Search
                filteredVenues={filteredVenues}
                searchInput={searchInput}
                onSearchInputChange={onSearchInputChange}
              />
              <div className="searchItem">
                {filteredVenues.map((item) => (
                  <Link to={`/venue/${item.id}`} key={item.id}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="suggested">
        <h2>Suggested destinations</h2>
        <div className="countries">
          <Link to="/norway" className="country">
            <img src="/norway.jpg" alt="Norway"/>
            <p>Norway</p>
          </Link>
          <Link to="/usa" className="country">
            <img src="/usa.jpg" alt="USA"/>
            <p>USA</p>
          </Link>
          <Link to="/italy" className="country">
            <img src="/italy.jpg" alt="Italy"/>
            <p>Italy</p>
          </Link>
          <Link to="/australia" className="country">
            <img src="/aus.jpg" alt="Australia"/>
            <p>Australia</p>
          </Link>
        </div>
      </div> */}
      <div className="venuesContainer">
        <h2>Featured venues</h2>
        <Venues venues={venues} />
      </div>
    </StyledHome>
  );
}

export default Home;
