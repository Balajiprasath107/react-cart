import { useEffect, useState } from "react"
import CartSpace from "./CartSpace"
import CartItems from "./CartItems"



function Card({item,cartcount,setcartCount,arryitem,setarrayitem}){
    let newarr = [...arryitem]
    const cartAdd = (e)=>{
        let temp = 0
        arryitem.map((e)=>{
            if(e.Name===item.Name){
                temp = 1
            }
        })
        
        if(temp===0){
            item.count = 1
            newarr = [...arryitem,item]  
            setcartCount(cartcount+1)
        }
        
        setarrayitem([...newarr])
        
    }

   

    
    return(
        
        <div className="col mb-5 z-2 positon-absolute">
            <div className="card h-100 z-2 positon-absolute">
                {
                 (item.sale)?<div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                    : <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Available soon</div>}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{item.Name}</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {
                                  [...Array(item.rating.star)].map((item,index)=>
                                    <div className="bi-star-fill" key={index}></div>
                                    
                                )
                                 
                            }
                            {
                                [...Array(5-item.rating.star)].map((item,index)=>
                                    <div className="bi-star" key={index}></div>
                                    
                                )
                            }
                            <div className="ms-2">{item.rating.count}</div>
                        </div>
                        {/* Product price*/}
                        {
                            item.sale? 
                            <div>
                                <span className="text-muted text-decoration-line-through me-2">${item.originalPrice}.00</span>${item.price}.00
                            </div>
                            :<div>
                                ${item.price}.00
                            </div> 
                        }
                        
                    </div>
                </div>
                {/* Product actions*/}{
                    item.sale?
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={cartAdd}>Add to Cart</a>
                    </div>
                    </div>
                    :<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><p className="text-black my-auto">Out of stock</p></div>
                </div>
                
                }

            </div>
        </div>
        
    )


}
export default Card
