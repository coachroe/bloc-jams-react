import React from 'react';
import styled from 'styled-components';

const Landing = () => (
  <LandingWrapper>
    <section className="landing">
        <h1 className="hero-title">Turn the music up!</h1>
      <section className="selling-points">
        <div className="point">
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go.  This streaming service is available on all mobile platforms.</p>
        </div>
      </section>
    </section>
  </LandingWrapper>
);

const LandingWrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  outline: 1px solid #fafafa;
  transition: outline ease-in 0.2s;
  &:hover,
  &:focus {
    outline: 1px solid #eaeaea;
  }
`;

export default Landing;
