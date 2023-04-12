import React from 'react'
import './Trending.scss'

export default function Trending() {
  return (
    <div className='trending container'>
        <div className="terndingh1 d-flex">
            <h1>Trending topics</h1>
            <a href="#">View all categories</a>
        </div>

        <div className="categories px-2">
            <div className="cat1 cat">
                <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg" alt="" />
                <span>Travel</span>
            </div>
            <div className="cat2 cat">
                <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg" alt="" />
                <span>Buisness</span>
            </div>
            <div className="cat3 cat">
                <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg" alt="" />
                <span>Marketing</span>
            </div>
            <div className="cat4 cat">
                <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg" alt="" />
                <span>Photography</span>
            </div>
        </div>
    </div>
  )
}
