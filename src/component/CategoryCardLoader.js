import React from 'react'
import style from './categoryCardLoad.module.css'
function CategoryCardLoader() {
  return (
    <div className={style.card}>
      <div className={style.description}>
        <div className={`${style.line} ${style.line_4}`}></div>
      </div>
      <div className={style.btns}>
        <div className={style.btn}></div>
      </div>
    </div>
  )
}

export default CategoryCardLoader
