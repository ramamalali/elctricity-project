import React from 'react'
import './Martyrs.css'
import img1 from './../../assets/img/Mat1.jpg'
import img2 from './../../assets/img/Mat2.jpg'
import img3 from './../../assets/img/Mat3.jpg'
import img4 from './../../assets/img/Mat4.jpg'
import img5 from './../../assets/img/Mat5.jpg'
import Button from 'react-bootstrap/Button';


const Martyrs = () => {
  return (
    <div>
      <h1 className='MAtitle'> شهداؤنا</h1>
      <div className='MAtAPP'>
        <div>
         <img src={img1} alt='mat1' className='Mimg'/>
         <p className='Mpargh'>الشهيد </p>
         <p className='Mpargh'>مازن محمد تمام</p>
        </div>

        <div>
         <img src={img2} alt='mat2' className='Mimg'/>
         <p className='Mpargh'>الشهيد </p>
         <p className='Mpargh'>محمد جميل بلال</p>
        </div>


        <div>
         <img src={img3} alt='mat3' className='Mimg'/>
         <p className='Mpargh'>الشهيد </p>
         <p className='Mpargh'>عبد الله كامل احمد</p>
        </div>

        <div>
         <img src={img4} alt='mat4' className='Mimg'/>
         <p className='Mpargh'>الشهيد </p>
         <p className='Mpargh'>محمود علي محمد</p>
        </div>

        <div>
         <img src={img5} alt='mat5' className='Mimg'/>
         <p className='Mpargh'>الشهيد </p>
         <p className='Mpargh'>محمد عمار المحمد</p>
        </div>
      </div>
      <Button className='MATbtn' variant="primary">عرض الكل</Button>
    </div>
  )
}

export default Martyrs
