import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  height: 300px;
  width: 992px;
  margin: 0 auto;
  border-radius: 25px;
  background: linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%);
  margin-top: 110px;
  margin-bottom: 46px;

  h2 {
    font-family: baloo-da;
    font-size: 48px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    color: white;
    text-align: left;
    width: 718px;
    padding: 68px 0 86px 52px;
  }
`;

function HeroCard() {
  return (
    <Hero>
      <h2>Discover, collect, and sell extraordinary NFTs, Currencies and GiftCards</h2>
    </Hero>
  )
}

export default HeroCard