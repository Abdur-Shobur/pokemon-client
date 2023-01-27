import React from 'react'
import pic from '../asset/010.png'
import Button from './Button'
import style from './card.module.css'
function CategoryCard() {
  return (
    <div>
      <div
        className={`bg-white relative p-4 ${style.card} hover:bg-blue-400 transition-all group rounded-lg`}
      >
        <div className={` `}>
          <div className="bg-gray-100 p-4 rounded-md">
            <span className="absolute font-semibold">#01</span>
            <img
              className=" group-hover:scale-125 transition-all"
              src={pic}
              alt=""
            />
          </div>
          <div className="mt-2">
            <h1 className="font-semibold mb-1 group-hover:text-white transition-all">
              Title
            </h1>
            <div className="flex gap-2">
              <Button class_name="bg-blue-500 text-white">Click</Button>
              <Button>More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
