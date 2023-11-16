import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from './reportWebVitals';
import MainMenu from './Component/MainMenu';
import Jumbotron from './Component/Jumbotron';
import Footer from './Component/Footer';
import Product from './Component/Product';
import Products from './Component/Products'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainMenu />
    <Jumbotron />
    <div className="container">
      <div className="row">
        {Products.map(prod => ( 
          <div className="col">
            <Product key={prod.name}
                name={prod.name}
                description ={prod.description}/>

          </div>
        ))
        };
      </div>
    </div>
    
    <Footer copyright="123456789" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
