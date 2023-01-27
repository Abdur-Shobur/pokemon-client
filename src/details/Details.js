import React from 'react'
import style from './detailsCard.module.css'
import img10 from '../asset/image 10.png'
import Left from '../asset/Left.png'

import { Link } from 'react-router-dom'
function Details() {
  return (
    <div className="relative px-6">
      <div className={`hidden xl:block ${style.left_side_image}`}>
        <img className="h-full" src={Left} alt="" />
      </div>
      <div className={`hidden xl:block ${style.right_side_image}`}>
        <img className="h-full" src={Left} alt="" />
      </div>
      <div className="py-10 pb-20 container mx-auto">
        <div className="mt-60">
          <div className="grid grid-col-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20">
            <div>
              <h1 className="text-6xl text-sky-600 font-semibold">
                Bulbasaur #001
              </h1>
              <p className="text-2xl font-semibold my-10 ">
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </p>
              <div className={`mt-20 ${style.box}`}>
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-3">Height</h1>
                    <p className="my-2 text-xl font-semibold">
                      skdflsaf slkdfs{' '}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-3">Height</h1>
                    <p className="my-2 text-xl font-semibold">
                      skdflsaf slkdfs{' '}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-3">Height</h1>
                    <p className="my-2 text-xl font-semibold">
                      skdflsaf slkdfs{' '}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-3">Height</h1>
                    <p className="my-2 text-xl font-semibold">
                      skdflsaf slkdfs{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="w-[120%]" src={img10} alt="" />
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-medium">Type </h1>
                <div className="flex gap-5 mt-5">
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Grass
                  </span>
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Position
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-medium mt-10">Weaknesses</h1>
                <div className="flex gap-5 mt-5">
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Grass
                  </span>
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Position
                  </span>
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Position
                  </span>
                  <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
                    Position
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-medium mt-10">Star</h1>
                <div>
                  <div className="mt-10">
                    <h1 className="font-bold text-lg my-3">HP</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold text-lg my-3">Attack</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold text-lg my-3">Defense</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold text-lg my-3">Special Attack</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold text-lg my-3">Special Defense</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                  <div className="mt-4">
                    <h1 className="font-bold text-lg my-3">Speed</h1>
                    <div className="h-1 bg-slate-300 before:bg-blue-500 before:absolute relative before:w-[30%] before:h-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <Link
              to="/"
              className="text-3xl flex items-center gap-2 border-8 px-5 py-2 bg-yellow-400 text-white rounded-md border-sky-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
