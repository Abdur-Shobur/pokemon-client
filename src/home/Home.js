import React from 'react'
import CategoryLists from './CategoryLists'
import background from '../assect/Background.png'
function Home() {
  return (
    <div>
      <div
        style={{ background: `url(${background})` }}
        className="!bg-cover py-10 pb-20"
      >
        <div className="container mx-auto">
          <CategoryLists />
        </div>
      </div>
    </div>
  )
}

export default Home
