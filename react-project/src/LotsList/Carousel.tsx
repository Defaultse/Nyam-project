import React, { ReactElement, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

export default function Carousel(): ReactElement {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width: '450px'}}>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.edamam.com/web-img/f81/f819fd819b7dea1d4ff131c532399cb9.jpg" alt="First slide"  onClick={()=>window.location.replace('/recipes')}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cook'n'sell</h5>
                        <p>Click to load the recipes page</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.edamam.com/web-img/cc4/cc489abcab3838196f98dc6b85079f26.jpg" alt="Second slide"  onClick={()=>window.location.replace('/recipes')}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cook'n'sell</h5>
                        <p>Click to load the recipes page</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.edamam.com/web-img/065/0653577985d2f0b181782fdbc788ce7d.jpg" alt="Third slide"  onClick={()=>window.location.replace('/recipes')}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cook'n'sell</h5>
                        <p>Click to load the recipes page</p>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
