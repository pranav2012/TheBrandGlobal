import HeroCard from '@elements/Landing/HeroCard'
import HotBids from '@elements/Landing/HotBids'
import TopSellers from '@elements/Landing/TopSellers'
import React from 'react'

function Landing() {
  return (
    <div>
      <HeroCard/>
      <TopSellers/>
      <HotBids/>
    </div>
  )
}

export default Landing