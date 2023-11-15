import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from './../../assets/img/2.jpg';
import './Home.css'



const Home = () => {

 /*  const [home, setHome] = useState([]);
  const fetchUserData = () => {
    fetch("https://mocki.io/v1/546991ab-16e1-4ec4-b77b-d67473d8442f")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setHome(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, []) */

  return (

    <Carousel className='home' >

    <Carousel.Item>
      <img src={img1} className='img'/>
      <Carousel.Caption className='home'>
        <h3  className='Htitle'>التوجه نحو الطاقات المتجددة في توليد الكهرباء</h3>
        <Button className='Hobtn' variant="warning">..اقرأ المزيد</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={img1} className='img'/>
      <Carousel.Caption>
        <h3 className='Htitle'>التوجه نحو الطاقات المتجددة في توليد الكهرباء</h3>
        <Button className='Hobtn' variant="warning">..اقرأ المزيد</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={img1} className='img'/>
      <Carousel.Caption>
        <h3 className='Htitle'>التوجه نحو الطاقات المتجددة في توليد الكهرباء</h3>
    
        <Button className='Hobtn' variant="warning">..اقرأ المزيد</Button>
      
      </Carousel.Caption>
    
    </Carousel.Item>
  
  </Carousel>
  )
}

export default Home
