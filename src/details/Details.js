import React, { useEffect, useState } from 'react'
import style from './detailsCard.module.css'
import img10 from '../asset/image 10.png'
import Left from '../asset/Left.png'
import { Link, useParams } from 'react-router-dom'

function Details() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const gqlQuery = `
  query Types($name: String!) {
    pokemon(name: $name) {
      types {
        type {
        name  
        }
      }
      weight
      stats {
      base_stat
        stat {
          name
        }
      }
      name
      message
      height
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      id
    }
  }`
  useEffect(() => {
    const gqlVariables = {
      name: params?.name,
    }
    if (params.name) {
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data?.pokemon)
          setLoading(false)
        })
    }
  }, [gqlQuery, params.name])

  const get_color = (text) => {
    switch (text) {
      case 'grass':
        return 'bg-lime-500'
      case 'poison':
        return 'bg-purple-500'
      case 'fire':
        return 'bg-orange-500'
      case 'bug':
        return 'bg-lime-600'
      default:
        return 'bg-sky-600'
    }
  }
  let content
  if (loading) {
    content = (
      <h1 className="min-h-[50vh] flex items-center justify-center">
        Loading.....
      </h1>
    )
  }
  if (!loading) {
    content = (
      <>
        <div className="grid grid-col-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20">
          <div>
            <h1 className="text-6xl text-sky-600 font-semibold capitalize">
              {data?.name} #0{data.id}
            </h1>
            <p className="text-2xl font-semibold my-10 ">{data?.message}</p>
            <div className={`mt-20 ${style.box}`}>
              <div className="flex justify-between">
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-3">Height</h1>
                  <p className="my-2 text-xl font-semibold">{data?.height}</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-3">Category</h1>
                  <p className="my-2 text-xl font-semibold">No data in API</p>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-3">Weight</h1>
                  <p className="my-2 text-xl font-semibold">{data?.weight}</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-3">Abilities</h1>
                  {data?.abilities?.map((e, i) => (
                    <p key={i} className="my-2 text-xl font-semibold">
                      {e?.ability?.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[120%]"
              src={data?.sprites?.front_default}
              alt=""
            />
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-medium">Type </h1>
              <div className="flex gap-5 mt-5">
                {data?.types?.map((e, i) => (
                  <span
                    key={i}
                    className={`px-5 py-2 text-2xl capitalize text-white rounded-md ${get_color(
                      e?.type?.name,
                    )}`}
                  >
                    {e?.type?.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-medium mt-10">Weaknesses</h1>
              <div className="flex gap-5 mt-5">
                {/* <span className="bg-slate-500 px-5 py-2 text-2xl text-white rounded-md">
            Grass
          </span> */}
                <h1>No Data in API</h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-medium mt-10">Star</h1>
              <div>
                {data?.stats?.map((e, i) => (
                  <div key={i} className="mt-4">
                    <h1 className="font-bold text-lg my-3 capitalize">
                      {e?.stat?.name}
                    </h1>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-300">
                      <div
                        className="bg-sky-600 h-1 rounded-full"
                        style={{ width: `${e.base_stat}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Back to Homepage</span>
          </Link>
        </div>
      </>
    )
  }

  return (
    <div className="relative px-6">
      <div className={`hidden xl:block ${style.left_side_image}`}>
        <img className="h-full" src={Left} alt="" />
      </div>
      <div className={`hidden xl:block ${style.right_side_image}`}>
        <img className="h-full" src={Left} alt="" />
      </div>
      <div className="py-10 pb-20 container mx-auto">
        <div className="mt-60">{content}</div>
      </div>
    </div>
  )
}

export default Details
