import React from 'react'
import './dashboard.css';
export const Sliders = () => {
  return (
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="sliders/Aarambh-cf.webp" className="d-block w-100 my_img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="sliders/Temple-of-Love-Cf.webp" className="d-block w-100 my_img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="sliders/VFN-Eoss-All-Brands.webp" className="d-block w-100 my_img" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}
