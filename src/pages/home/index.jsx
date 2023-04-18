import React from 'react'
import { StyledHome } from '../../styles/Home.styles';
function Home() {
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
    </StyledHome>
  )
}

export default Home;