import React from 'react'
import style from './home.module.css'
import img1 from '../asset/Image01.png'
import img2 from '../asset/Image02.png'
import img3 from '../asset/Image03.png'
import img4 from '../asset/Image04.png'
import img5 from '../asset/Image05.png'
function Details() {
  return (
    <div className="py-10 container mx-auto">
      <div className="">
        <h1
          className={`my-10 text-5xl font-semibold text-[#257BC4] text-center ${style.behind_style}`}
        >
          Ash & Pikachu Arrive in <br /> Pokémon Universe
        </h1>
      </div>
      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-5 grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                laborum neque delectus vel, excepturi molestiae, voluptatibus
                cupiditate voluptate nihil sequi cumque quisquam repellendus
                tempore repudiandae vero numquam sunt nulla assumenda! laborum
                neque delectus vel, excepturi molestiae, voluptatibus cupiditate
                voluptate nihil sequi cumque quisquam repellendus tempore
                repudiandae vero numquam sunt nulla assumenda!
              </p>
            </div>
            <div className="grid grid-cols-4 mt-3 gap-3">
              <div className="col-span-3">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  laborum neque delectus vel, excepturi molestiae, voluptatibus
                  cupiditate voluptate nihil sequi cumque quisquam repellendus
                  tempore repudiandae vero numquam sunt nulla assumenda! laborum
                  neque delectus vel, excepturi molestiae, voluptatibus
                  cupiditate voluptate nihil sequi cumque quisquam repellendus
                  tempore repudiandae vero numquam sunt nulla assumenda!
                </p>
              </div>
              <div className="col-span-1">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                laborum neque delectus vel, excepturi molestiae, voluptatibus
                cupiditate voluptate nihil sequi cumque quisquam repellendus
                tempore repudiandae vero numquam sunt nulla assumenda! laborum
                neque delectus vel, excepturi molestiae, voluptatibus cupiditate
                voluptate nihil sequi cumque quisquam repellendus tempore
                repudiandae vero numquam sunt nulla assumenda!
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="mt-5">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="col-span-5">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              laborum neque delectus vel, excepturi molestiae, voluptatibus
              cupiditate voluptate nihil sequi cumque quisquam repellendus
              tempore repudiandae vero numquam sunt nulla assumenda! laborum
              neque delectus vel, excepturi molestiae, voluptatibus cupiditate
              voluptate nihil sequi cumque quisquam repellendus tempore
              repudiandae vero numquam sunt nulla assumenda!
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            laborum neque delectus vel, excepturi molestiae, voluptatibus
            cupiditate voluptate nihil sequi cumque quisquam repellendus tempore
            repudiandae vero numquam sunt nulla assumenda!
          </p>
          <div className="grid grid-cols-4 gap-5 mt-3">
            <div className="col-span-1">
              <img src={img5} alt="" />
            </div>

            <div className="col-span-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                laborum neque delectus vel, excepturi molestiae, voluptatibus
                cupiditate voluptate nihil sequi cumque quisquam repellendus
                tempore repudiandae vero numquam sunt nulla assumenda! laborum
                neque delectus vel, excepturi molestiae, voluptatibus cupiditate
                voluptate nihil sequi cumque quisquam repellendus tempore
                repudiandae vero numquam sunt nulla assumenda!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-3">
            <div className="col-span-1">
              <img src={img1} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                laborum neque delectus vel, excepturi molestiae, voluptatibus
                cupiditate voluptate nihil sequi cumque quisquam repellendus
                tempore repudiandae vero numquam sunt nulla assumenda! laborum
                neque delectus vel, excepturi molestiae, voluptatibus cupiditate
                voluptate nihil sequi cumque quisquam repellendus tempore
                repudiandae vero numquam sunt nulla assumenda!
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              repellendus inventore itaque doloremque veritatis repudiandae
              esse. Eum consequatur cupiditate assumenda, dolor, rerum amet,
              voluptate architecto cum facere fugit pariatur minima. repellendus
              inventore itaque doloremque veritatis repudiandae esse. Eum
              consequatur cupiditate assumenda, dolor, rerum amet, voluptate
              architecto cum facere fugit pariatur minima. repellendus inventore
              itaque doloremque veritatis repudiandae esse. Eum consequatur
              cupiditate assumenda, dolor, rerum amet, voluptate architecto cum
              facere fugit pariatur minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
