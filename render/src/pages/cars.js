import React from 'react';
import { Navigate } from 'react-router-dom';



function Cars() {
 
    
    return (
 <div className='container' style={{ width:"100%", display:"inline-block"}}>
<div className="row">
  

<div className="card" style={{ marginLeft:"200px",marginTop : "100px",width: "22rem",backgroundColor : "white"}}>
<p style={{marginLeft :"90px"}}> <b>Chevrolet Impala</b></p>
<img className="card-img-top" style={{width : "20rem", height:"15rem"}} src="https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Nothing</h5>
<p className="card-text"><b>Price : </b> <hr/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="/car" className="btn btn-primary"style={{marginLeft :"90px"}} >Add to Cart</a>
</div>
</div>

<div className="card" style={{ marginLeft:"200px",marginTop : "100px",width: "22rem",backgroundColor : "white"}}>
<p style={{marginLeft :"90px"}}> <b>Chevrolet Impala</b> </p>
<img className="card-img-top" style={{width : "20rem", height:"15rem"}} src="https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Nothing</h5>
<p className="card-text"> <b>Price : </b> <hr/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="/car" className="btn btn-primary" style={{marginLeft :"90px"}}>Add to Cart</a>
</div>
</div>

<div className="card" style={{ marginLeft:"200px",marginTop : "100px",width: "22rem",backgroundColor : "white"}}>
<p style={{marginLeft :"90px"}}> <b>Chevrolet Impala</b></p>
<img className="card-img-top" style={{width : "20rem", height:"15rem"}} src="https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Nothing</h5>
<p className="card-text"><b>Price : </b> <hr/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="/car" className="btn btn-primary"style={{marginLeft :"90px"}}>Add to Cart</a>
</div>
</div>

<div className="card" style={{ marginLeft:"200px",marginTop : "100px",width: "22rem",backgroundColor : "white"}}>
<p style={{marginLeft :"90px"}}> <b>Chevrolet Impala</b></p>
<img className="card-img-top" style={{width : "20rem", height:"15rem"}} src="https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Nothing</h5>
<p className="card-text"><b>Price : </b> <hr/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="/car" className="btn btn-primary"style={{marginLeft :"90px"}}>Add to Cart</a>
</div>
</div>
  

 </div>
  
   </div>
            
);  
}

export default Cars;
