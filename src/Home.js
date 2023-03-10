import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=aca146388f8fac95029ee0d380bc949b`;
      const response = await fetch(url);
      console.log(response);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div
      className="container"
      style={{ marginBottom: "100px", marginTop: "50px" }}
    >
      <div className="row-sm-12">
        <div className="col d-flex justify-content-center">
          <div className="col-xl-8 sm-12">
            <div className="card text-center">
              <div className="card-header">
                Search Weather <i class="fas fa-cloud-sun"></i>
              </div>
              <div className="card-body">
                <i className="fa fa-street-view fa-3x fa-spin p-1"></i>
                <h5 className="card-title">Enter City-Name Here</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Enter City"
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                  {/* <div className="input-group-append">
    <button className="btn btn-outline-primary" type="button">Search</button>
  </div> */}
                </div>
                {!city ? (
                  <p>
                    <h2>Data not Found</h2>
                  </p>
                ) : (
                  <div>
                    <p
                      id="mainContentIcon"
                      className="card-text border p-4 "
                      style={{ borderRadius: "25px" }}
                    >
                      <h2>{search}</h2>
                      <h4>
                        Temp{" "}
                        <i
                          class="fa fa-thermometer-half"
                          aria-hidden="true"
                        ></i>{" "}
                        {(city.temp - 273.15).toFixed(2) + "C"}
                      </h4>
                      <h4>
                        Min Temp <i class="fa fa-thermometer-empty"></i>{" "}
                        {(city.temp_min - 273.15).toFixed(2) + "C"}
                      </h4>
                      <h4>
                        Max Temp <i class="fa fa-thermometer-full"></i>{" "}
                        {(city.temp_max - 273.15).toFixed(2) + "C"}
                      </h4>
                      <h4>
                        Pressure <i class="fa fa-wind"></i> {city.pressure}
                      </h4>
                      <h4>
                        Humidity <i class="fa fa-tint"></i> {city.humidity}
                      </h4>
                    </p>
                    <span>
                      <a href="#" className="btn btn-outline-primary">
                        Know more
                      </a>
                    </span>
                  </div>
                )}
              </div>
              <div className="card-footer text-muted">
                1 min ago {", " + search}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
