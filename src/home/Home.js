import React from 'react'
import CategoryLists from './CategoryLists'
import background from '../asset/Background.png'
import style from './home.module.css'
import Details from './Details'
function Home() {
  return (
    <div className="">
      <div
        style={{ background: `url(${background})` }}
        className={`!bg-cover py-10 pb-20 ${style.bg_img}`}
      >
        <div className="container mx-auto">
          <CategoryLists />
        </div>
      </div>
      <Details />
    </div>
  )
}

export default Home
