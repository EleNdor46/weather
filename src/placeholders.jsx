import React from "react";

const Placeholder = ({ location,setGetLocation,handleClick,getLocation,weatherInThisMoment,stautsImg,status}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text"></p>
          {weatherInThisMoment&&<span>{weatherInThisMoment}°C</span>}
            
            {stautsImg&&<img src={stautsImg} alt="..."></img>}
            {status&&<span>{status}</span>}
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <i className="icon ion-md-compass"></i>
            </span>
            <input
            onInput={e => setGetLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            ></input>
            <button type="button" className="btn btn-primary" onClick={()=>handleClick(getLocation)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Placeholder;
