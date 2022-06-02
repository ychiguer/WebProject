import React from "react";
import '../css/intro.css';
import { NavLink } from "react-router-dom";
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from "react";

function Intro() {
    return (

        
    <div class="introduction">
    <section class="py-7 py-md-0 bg-hero" id="home">
        <div class="container">
            <div class="row vh-md-100">
                <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                    <h1 class="heading-black text-capitalize">All the ways to find car chemistry</h1>
                    <p class="lead py-3">We're your one-stop shop for buying and selling your car.
                            Get matched to your perfect car, or sell one swiftly.</p>
                    <div class="button">
                    <button class="btn">
                        <NavLink class="starting" to="/signup">Get started now</NavLink>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-6 pb-7" id="features">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="heading-black">All in one store.</h2>
                <p class="text-muted lead">You can explore, shop and sell cars here</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-10 mx-auto">
                <div class="row feature-boxes">
                    <div class="col-md-6 box">
                        <div class="icon-box box-primary">
                            <div class="icon-box-inner">
                                <span data-feather="edit-3" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>SHOP</h5>
                        <p class="text-muted">Find cars for sale, features, and advice.
                                Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-success">
                            <div class="icon-box-inner">
                                <span data-feather="monitor" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Sell</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                            nisi commodo, tempus odio a, vestibulum nibh.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-danger">
                            <div class="icon-box-inner">
                                <span data-feather="layout" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Explore</h5>
                        <p class="text-muted">Exploring like never before : detailed features, guide and reviews of every car selling offer.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-info">
                            <div class="icon-box-inner">
                                <span data-feather="globe" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Available globally</h5>
                        <p class="text-muted">Find your nearest car offers or get a delivery with your matched car.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>


);
}
export default Intro;