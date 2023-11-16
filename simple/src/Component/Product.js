 import React from "react";

 const Product = ({description,name})=> {
    
   return (Math.random() > 0.5 
    ?(
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            {description} 
          </p>
          <a href="#" className="btn btn-secondary">
            Go somewhere
          </a>
        </div>
      </div>
    </React.Fragment>): (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {name}
            </h5>
            <p className="card-text">
              {description} 
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </React.Fragment>) )}

      
export default Product; 