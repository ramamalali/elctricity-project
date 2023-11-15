import React from "react";
import "./Services.css";
import icon from "./../../assets/img/icon.svg";
import icon2 from "./../../assets/img/icon2.svg";
import icon3 from "./../../assets/img/icon3.svg";
const Services = () => {
  /*   const [Services, setServices] = useState([]);
  const fetchUserData = () => {
    fetch("https://mocki.io/v1/546991ab-16e1-4ec4-b77b-d67473d8442f")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setServices(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, []) */
  return (
    <div className="services">
      <p className="dot">
        {" "}
        <p className="dot1">
          {" "}
          <p className="star">
            <h1 className="HAtitle">خدمات</h1>
          </p>
        </p>
      </p>
      <div className="container">
        <div className="sercard row">
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div className="card mt-5 text-center">
              <div className=" mt-3 p-3 align-self-center">
                <img src={icon} className="Himg" />{" "}
              </div>
              <label className="HD mb-2 mt-3">الشكاوي </label>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div className="card mt-5 text-center">
              <div className="mt-3 p-3 align-self-center">
                <img src={icon2} className="Himg" />{" "}
              </div>
              <label className="HD mb-2 mt-3">الأوراق الثبوتية</label>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div className="card mt-5 text-center">
              <div className=" mt-3 p-3 align-self-center">
                <img src={icon3} className="Himg" />{" "}
              </div>
              <label className="HD mb-2 mt-3">الدفع الإلكتروني</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
