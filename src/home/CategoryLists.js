import React from 'react'
import CategoryCard from '../component/CategoryCard'

function CategoryLists() {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-5 gap-10">
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
    </div>
  )
}

export default CategoryLists
