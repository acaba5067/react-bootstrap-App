import React from 'react';
import image from '../assests/logo.svg'
function NewsItem({title,description,src,url}) {
    return (      
        <div className="card bg-dark text-light ms-3 mt-3 mx-auto d-inline-block"style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
          <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"loerm "}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
 
    );
}

export default NewsItem;