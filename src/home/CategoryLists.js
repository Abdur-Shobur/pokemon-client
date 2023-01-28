import React, { useEffect, useState } from 'react'
import CategoryCard from '../component/CategoryCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
function CategoryLists() {
  const [pokemons, setPokemons] = useState([])
  const gqlQuery = `query Pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit,offset: $offset ) {
      results {
        id
        name
        image
        artwork
        url
      }
    }
     
  }`

  useEffect(() => {
    const gqlVariables = {
      limit: 10,
      offset: 1,
    }

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
        setPokemons(res.data.pokemons.results)
      })
  }, [gqlQuery])

  return (
    <div className="mt-60">
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {pokemons?.map((e) => (
          <CategoryCard key={e.id} pokemon={e} />
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {pokemons?.map((e) => (
            <SwiperSlide>
              <CategoryCard key={e.id} pokemon={e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CategoryLists
