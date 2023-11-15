import React from 'react'
import './Electricity.css'
import Elc from './../../assets/img/Electricity.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from './../../assets/img/img1.jpg'
import img2 from './../../assets/img/img1.jpg'
import img3 from './../../assets/img/img1.jpg'
const Electricity = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='EleApp'>
        <h1 className='Etitle'>كيف تصلنا الكهرباء</h1>
    <div className='Electricity'>
      <div className='Eimg1'>
    <img src={Elc} className='Eimg'/>
    </div>
    <div className='Elpar'>
      <p className='Edesc'>.تمرّ عملية توليد الكهرباء بعدة مراحل وعبر منظومة معقدة قبل أن تصل إلى المنازل وغيرها</p>
    <h3 className='ElecH'>: المرحلة الأولى </h3>
    <p className='Edesc'>يتم توليد الكهرباء ضمن محطات ضخمة للتوليد عن طريق تسخين الماء لينتج البخار الذي يدوّر توربينات موصولة بمولدات كهربائية تدور لتولد الكهرباء ، وتعمل هذه المحطات على الغاز أو الفيول ، وقد يتم توليد الكهرباء من مصادر الطاقة البديلة مثل طاقة الشمس والرياح</p>
    <h3 className='ElecH'>: المرحلة الثانية </h3>
    <p className='Edesc'> يتم نقل الكهرباء عبر شبكات النقل ولكن قبل نقل الكهرباء يجب رفع جهدها عبر محولات ليتم نقلها بعدها عبر خطوط التوتر العالي والتي تربطها أبراج ضخمة ممتدة عبر مئات الكيلومترات من محطات التوليد لتصل إلى محطات تحويل الكهرباء</p>
    <h3 className='ElecH'>: المرحلة الثالثة </h3>
    <p className='Edesc'> توزيع الكهرباء حيث تبدأ محطات التحويل بتخفيض جهد الكهرباء من خلال محطات فرعية تختص بتوزيعها ، حيث تقوم هذه المحطّات بتوجيه الكهرباء ذات الجُهد العالي من خطوط النقل إلى محوّلات خافضة للجهد ، وفي النهاية تصل الكهرباء إلى مركز التحويل الموجود في حيّك ومنه عبر كبل تصل إلى منزلك</p>
  </div>
  </div>


<div className='Slide_Electricity'>
<p className='Edesc' style={{textAlign:'center',margin:'40px'}}>.تمرّ عملية توليد الكهرباء بعدة مراحل وعبر منظومة معقدة قبل أن تصل إلى المنازل وغيرها</p>
<Slider {...settings} className='Slider1'>
          <div className='Ecard'>
    <div className="image-content">
      <div className="card-image">
        <img src={img1} alt="img1" className="card-img" />
      </div>
    </div>
    <div className="card-content">
      <div className='Ntitle'>
      <h3 className='EH'>: المرحلة الأولى </h3>
      </div>
      <div className='epa'>
    <p className='Edesc'>يتم توليد الكهرباء ضمن محطات ضخمة للتوليد عن طريق تسخين الماء لينتج البخار الذي يدوّر توربينات موصولة بمولدات كهربائية تدور لتولد الكهرباء ، وتعمل هذه المحطات على الغاز أو الفيول ، وقد يتم توليد الكهرباء من مصادر الطاقة البديلة مثل طاقة الشمس والرياح</p>
      </div>
      </div>
</div>
<div className='Ecard'>
    <div className="image-content">
      <div className="card-image">
        <img src={img1} alt="img1" className="card-img" />
      </div>
    </div>
    <div className="card-content">
      <div className='Ntitle'>
      <h3 className='EH'>: المرحلة الثانية </h3>
      </div>
      <div className='epa'>
      <p className='Edesc'> يتم نقل الكهرباء عبر شبكات النقل ولكن قبل نقل الكهرباء يجب رفع جهدها عبر محولات ليتم نقلها بعدها عبر خطوط التوتر العالي والتي تربطها أبراج ضخمة ممتدة عبر مئات الكيلومترات من محطات التوليد لتصل إلى محطات تحويل الكهرباء</p>
      </div>
      </div>
</div>
<div className='Ecard'>
    <div className="image-content">
      <div className="card-image">
        <img src={img1} alt="img1" className="card-img" />
      </div>
    </div>
    <div className="card-content">
      <div className='Ntitle'>
      <h3 className='EH'>: المرحلة الثالثة </h3>
      </div>
      <div className='epa'>
      <p className='Edesc'> توزيع الكهرباء حيث تبدأ محطات التحويل بتخفيض جهد الكهرباء من خلال محطات فرعية تختص بتوزيعها ، حيث تقوم هذه المحطّات بتوجيه الكهرباء ذات الجُهد العالي من خطوط النقل إلى محوّلات خافضة للجهد ، وفي النهاية تصل الكهرباء إلى مركز التحويل الموجود في حيّك ومنه عبر كبل تصل إلى منزلك</p>
      </div>
      </div>
</div>
  
</Slider>
</div>

  </div>
  )
}

export default Electricity
