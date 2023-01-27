import React from 'react'
import CategoryCard from '../component/CategoryCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
function CategoryLists() {
  return (
    <div className="mt-40">
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
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
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CategoryLists
