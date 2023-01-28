import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../asset/010.png'
import Button from './Button'
import style from './card.module.css'
function CategoryCard({ pokemon }) {
  const [types, setTypes] = useState(null)
  const gqlQuery = `
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          name
        }
      }
    }
  }`

  useEffect(() => {
    const gqlVariables = {
      name: pokemon?.name,
    }
    if (pokemon?.name) {
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
          setTypes(res?.data?.pokemon?.types)
        })
    }
  }, [pokemon?.name, gqlQuery])

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
  return (
    <div>
      <Link to={`/details/${pokemon?.name}`}>
        <div
          className={`bg-white relative p-4 ${style.card} hover:bg-blue-400 transition-all group rounded-lg`}
        >
          <div className={` `}>
            <div className="bg-gray-100 p-4 rounded-md">
              <span className="absolute font-semibold">#0{pokemon?.id}</span>
              <img
                className=" group-hover:scale-125 transition-all"
                src={pokemon?.artwork}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="font-semibold mb-1 group-hover:text-white transition-all capitalize">
                {pokemon?.name}
              </h1>
              <div className="flex gap-2">
                {types?.map((e, i) => (
                  <Button
                    key={i}
                    type={e}
                    class_name={get_color(e?.type?.name)}
                  >
                    {e?.type?.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard
