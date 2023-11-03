import React from 'react'
import './Services.css'
import icon from './../../assets/img/icon.svg'
import icon2 from './../../assets/img/icon2.svg'
import icon3 from './../../assets/img/icon3.svg'
const Services = () => {
  return (
    <div className='services'>
        <p className='dot'> <p className='dot1'>  <p className='star'><h1 className='HAtitle'>خدمات</h1></p></p></p>
        <div className="container">
      <div className="row">
       <div className=" col-lg-4 col-md-6 col-sm-12">
       <div className="card mt-5 text-center">
      <div className=" mt-3 p-3 align-self-center"><img src={icon} className='Himg'/> </div>
      <label className="HD mb-2 mt-3">الشكاوي </label>
     </div>
     </div>
     <div className=" col-lg-4 col-md-6 col-sm-12">
      <div className="card mt-5 text-center">
     <div className="mt-3 p-3 align-self-center"><img src={icon2} className='Himg'/> </div>
     <label className="HD mb-2 mt-3">الأوراق الثبوتية</label>
    </div>
    </div>
     <div className=" col-lg-4 col-md-6 col-sm-12">
      <div className="card mt-5 text-center">
     <div className=" mt-3 p-3 align-self-center"><img src={icon3} className='Himg'/> </div>
     <label className="HD mb-2 mt-3">الدفع الالكتروني</label>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Services
