import React from "react";
import { NavLink } from "react-router-dom";
import Wev from "../src/img/favIcon.jpg";

const Card = (props) => {
    console.log(props);
  return (
    <>
      

              <div className="col-md-4 col-10 mx-auto">
              <div className="card" style={{ width: "18rem" }}>
                <img src={props.imgsrc} className="card-img-top" alt="Img" />
                <div className="card-body">
                  <h5 className="card-title">{props.cardTitle}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="" className="btn btn-primary">
                    Click to go
                  </NavLink>
                </div>
              </div>
            </div>
       
        
    </>
  );
};

export default Card;
