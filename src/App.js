import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHA from './Componets/Navbar/NavbarHA';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Complaints from './Page/Complaints/Complaints';
import Electricity from './Page/Electricity/Electricity';
import News from './Page/News/News';
import Martyrs from './Page/Martyrs/Martyrs';
import Footer from './Componets/Footer/Footer';

function App() {
  return (
    <div className="App">
    <NavbarHA/>   
       <Home/> 
         <Services/>   
    {/*     <Complaints/>  */} 
    <Electricity/> 
    <News/>  
    <Martyrs/>  
  <Footer/>  
    </div>
  );
}

export default App;
