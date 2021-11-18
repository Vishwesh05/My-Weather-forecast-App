import React, { useEffect, useState } from "react";
import About from "./about";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);
  const [showAbout,setShowAbout]= useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e5985661156ad0b0651f185ccf80d408`;
      const rr = await fetch(url);
      const resJson = await rr.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div>
      <div className="inputData">
        <h3>Select City</h3>
        {/* <input
          type="search"
          value={search}
          className="inputfield"
          onChange={(v) => {
            setSearch(v.target.value);
          }}
        />{" "} */}
        <select
          className="error"
          id="dropinput"
          onChange={(v) => {
            setSearch(v.target.value);
          }}
        >
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="main">
        <div class="item flex-1">
          {!city ? (
            <p className="error">No Data Found</p>
          ) : (
            <div className="info ">
              <br />
              <h2 className="temp">{search}</h2>
              <br />
              <br />
              <h1 className="temp">{city.temp} °C</h1>
            </div>
          )}
        </div>

        <div class="item flex-2">
          {!city ? (
            <p className="error">No Data Found</p>
          ) : (
            <div>
              <h3 className="tempmin_max">
                <br />
            
                Min : {city.temp_min} °C    Max : {city.temp_max} °C
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* {console.log("viswesh",showAbout)} */}
    <button onClick={()=> setShowAbout(!showAbout)} className="about"> About</button>
     { showAbout &&  <div className="about">
              <About/>
   </div>
      }
    </div>
  );
};

export default Tempapp;
