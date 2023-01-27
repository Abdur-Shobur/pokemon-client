import React from 'react'
import style from './home.module.css'
import img1 from '../asset/Image01.png'
import img2 from '../asset/Image02.png'
import img3 from '../asset/Image03.png'
import img4 from '../asset/Image04.png'
import img5 from '../asset/Image05.png'
import Left from '../asset/Left.png'
function Details() {
  return (
    <div className="relative overflow-hidden">
      <div className={`hidden xl:block ${style.left_side_image}`}>
        <img src={Left} alt="" />
        <img src={Left} alt="" />
      </div>
      <div className={`hidden xl:block ${style.right_side_image}`}>
        <img src={Left} alt="" />
        <img src={Left} alt="" />
      </div>
      <div className="py-10 container mx-auto">
        <div className="">
          <h1
            className={`my-10 text-5xl font-semibold text-[#257BC4] text-center ${style.behind_style}`}
          >
            Ash & Pikachu Arrive in <br /> Pokémon Universe
          </h1>
        </div>
        <div className="xl:hidden p-4">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia velit
            quis quaerat architecto dolorum ad facere atque neque enim at. Quod
            ipsum molestias ut assumenda cupiditate explicabo ad tenetur
            tempora! quis quaerat architecto dolorum ad facere atque neque enim
            at. Quod ipsum molestias ut assumenda cupiditate explicabo ad
            tenetur tempora! quis quaerat architecto dolorum ad facere atque
            neque enim at. Quod ipsum molestias ut assumenda cupiditate
            explicabo ad tenetur tempora! quis quaerat architecto dolorum ad
            facere atque neque enim at. Quod ipsum molestias ut assumenda
            cupiditate explicabo ad tenetur tempora! quis quaerat architecto
            dolorum ad facere atque neque enim at. Quod ipsum molestias ut
            assumenda cupiditate explicabo ad tenetur tempora!
          </p>
        </div>
        <div className="grid grid-cols-9 gap-5">
          <div className="col-span-6 xl:col-span-5">
            <div className="flex gap-5 justify-end items-center ">
              <div className="flex-grow">
                <p className="text-justify hidden xl:block">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  laborum neque delectus vel, excepturi molestiae, voluptatibus
                  cupiditate voluptate nihil sequi cumque quisquam repellendus
                  tempore repudiandae vero numquam sunt nulla assumenda! laborum
                  neque delectus vel, excepturi molestiae, voluptatibus
                  cupiditate voluptate nihil sequi cumque quisquam repellendus
                  tempore repudiandae vero numquam sunt nulla assumenda!
                </p>

                <div className="flex mt-3 gap-5 justify-end">
                  <div className="flex-wrap hidden xl:block">
                    <p className="text-justify  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint laborum neque delectus vel, excepturi molestiae,
                      voluptatibus cupiditate voluptate nihil sequi cumque
                      quisquam repellendus tempore repudiandae vero numquam sunt
                      nulla assumenda! laborum neque delectus vel, excepturi
                      molestiae, voluptatibus cupiditate voluptate nihil sequi
                      cumque quisquam repellendus tempore repudiandae vero
                      numquam sunt nulla assumenda!
                    </p>
                  </div>
                  <div className="">
                    <img className="md:min-w-[200px]" src={img4} alt="" />
                  </div>
                </div>
                <div className="mt-3 hidden xl:block">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint laborum neque delectus vel, excepturi molestiae,
                    voluptatibus cupiditate voluptate nihil sequi cumque
                    quisquam repellendus tempore repudiandae vero numquam sunt
                    nulla assumenda! laborum neque delectus vel, excepturi
                    molestiae, voluptatibus cupiditate voluptate nihil sequi
                    cumque quisquam repellendus tempore repudiandae vero numquam
                    sunt nulla assumenda!
                  </p>
                </div>
              </div>
              <div className="xl:flex-grow">
                <div>
                  <img className="md:min-w-[200px]" src={img3} alt="" />
                </div>
                <div className="mt-5">
                  <img className="md:min-w-[200px]" src={img2} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="col-span-5 hidden xl:block">
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
            </div>
          </div>
          <div className="col-span-3 xl:col-span-4 mt-10 xl:mt-0">
            <p className="text-justify hidden xl:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              laborum neque delectus vel, excepturi molestiae, voluptatibus
              cupiditate voluptate nihil sequi cumque quisquam repellendus
              tempore repudiandae vero numquam sunt nulla assumenda!
            </p>
            <div className="flex gap-5 mt-3">
              <div className="">
                <img className="md:min-w-[200px]" src={img5} alt="" />
              </div>

              <div className="flex-grow hidden xl:block">
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
            </div>
            <div className="flex gap-5 mt-3">
              <div className="">
                <img className="md:min-w-[200px]" src={img1} alt="" />
              </div>
              <div className="flex-grow hidden xl:block">
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
            </div>
            <div>
              <p className="text-justify hidden xl:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias repellendus inventore itaque doloremque veritatis
                repudiandae esse. Eum consequatur cupiditate assumenda, dolor,
                rerum amet, voluptate architecto cum facere fugit pariatur
                minima. repellendus inventore itaque doloremque veritatis
                repudiandae esse. Eum consequatur cupiditate assumenda, dolor,
                rerum amet, voluptate architecto cum facere fugit pariatur
                minima. repellendus inventore itaque doloremque veritatis
                repudiandae esse. Eum consequatur cupiditate assumenda, dolor,
                rerum amet, voluptate architecto cum facere fugit pariatur
                minima.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:hidden p-4">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia velit
            quis quaerat architecto dolorum ad facere atque neque enim at. Quod
            ipsum molestias ut assumenda cupiditate explicabo ad tenetur
            tempora! quis quaerat architecto dolorum ad facere atque neque enim
            at. Quod ipsum molestias ut assumenda cupiditate explicabo ad
            tenetur tempora! quis quaerat architecto dolorum ad facere atque
            neque enim at. Quod ipsum molestias ut assumenda cupiditate
            explicabo ad tenetur tempora! quis quaerat architecto dolorum ad
            facere atque neque enim at. Quod ipsum molestias ut assumenda
            cupiditate explicabo ad tenetur tempora! quis quaerat architecto
            dolorum ad facere atque neque enim at. Quod ipsum molestias ut
            assumenda cupiditate explicabo ad tenetur tempora!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
