import React from 'react';
import { useState } from "react";
import NavigationPublic from './navigationPublic'

function Cars() {

   const products = [
      {
         id: 1,
         name: "Chevrolet Impala",
         price: 9900,
         photo: "https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg"
      },
      {
         id: 2,
         name: "Bmw",
         price: 16500,
         photo: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/01/BMW-m4-GTS---Front.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5"
      },
      {
         id: 3,
         name: "Mercedes-Benz A-Class Limousine",
         price: 4500,
         photo: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-A-Class-Limousine-100420211633.jpg"
      },
   ];

   return (
      <div>
         <NavigationPublic />
         {products.map((p) => (

            <div key={p.id}>
               <div className="card" style={{ marginLeft: "380px", marginTop: "100px", width: "35rem", backgroundColor: "white" }}>
                  <p style={{ marginLeft: "0px" }}> <b> <center>{p.name}</center> </b></p>
                  <center> <img className="card-img-top" style={{ width: "25rem", height: "20rem" }} src={p.photo} alt="Card image cap" /> </center>
                  <div className="card-body">
                     <h5 className="card-title">Nothing</h5>
                     <p className="card-text"><b>Price : {p.price} $ </b> </p>
                     <center><button className="btn btn-primary" style={{ marginLeft: "0px" }} >Show more</button> </center>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}


export default Cars; 