import NavbarHA from "../Componets/Navbar/NavbarHA";
 import Home from "../Componets/Home/Home";
import Services from "../Componets/Services/Services";
import Complaints from "../Componets/Complaints/Complaints";
import Electricity from "../Componets/Electricity/Electricity";
import News from "../Componets/News/News";
import Martyrs from "../Componets/Martyrs/Martyrs";
import Footer from "../Componets/Footer/Footer"; 

import React from "react";

export const Elctricity = () => {
  return (
    <div>
      <NavbarHA />
      <Home />
      <Services />
      <Complaints />
      <Electricity />
     <News />
     <Martyrs />
      <Footer />
    </div>
  );
};
export default Elctricity;
