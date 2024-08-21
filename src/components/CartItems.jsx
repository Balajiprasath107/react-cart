import { useEffect, useState } from "react"


function CartItems({item,count,cartcount,setcartCount,arryitem,setarrayitem,alltotal,setalltotal}){
    const [cartc,setcartc] = useState(1)

    
    function dec(){
       if(cartc>0){
        
        setcartc(cartc-1)
        item.count ++
        setcartCount(cartcount-1)

        if(item.count===0)
            setarrayitem([...arryitem,item])
        let product = [...arryitem]    
        setarrayitem(product)
    
}
    }
    function inc(){
        setcartc(cartc+1)
        item.count ++
        setcartCount(cartcount+1)
    if(item.count===0)
        setarrayitem([...arryitem,item])
    let product = [...arryitem]    
    setarrayitem(product)

    }



    const rem= (e)=>{
        item.count = 0
        let newarr = [],t=0
        arryitem.map((e)=>{
            if(e.Name!==item.Name){
                if(t===1)
                {
                    setcartc(e.count)
                    t=0
                }
                newarr = [...newarr,e]

            }
            else
            t=1

        })
        setcartCount(cartcount-(cartc))
        setarrayitem([...newarr])

    }
    function val(){
        return item.count
    }
    

    return(

        <div className="card mb-3">
          <div className="row g-0">
            <div className="card col-md-4">
            <img src="https://dummyimage.com/100x100/999999/fff" alt="..."></img>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <div>
                    <div className="text-start">
                        {/* Product name*/}
                        <section className="fw-bolder">{item.Name}
                        <div className="float-end align-top">
                        <button type="button" className="align-top btn btn-info" style={{padding:"0.5rem",paddingBottom:0,paddingTop:0}} onClick={dec}>-</button>
                        <input style={{width: "40px",verticalAlign:"tops",padding:"0"}} type="text" value={val()} readOnly></input>
                        <button type="button" className="align-top btn btn-info"  style={{padding:"0.5rem",paddingBottom:0,paddingTop:0}} onClick={inc}>+</button>
                        </div>
                        </section>
                        
                        {/* Product reviews*/}
                        <div className="d-flex  small text-warning mb-2">
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
                        <p className="float-end">total: ${item.price * item.count}.00</p>
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
                    <button className="btn btn-danger" onClick={rem}>remove</button>
                </div>
            </div>
            </div>
        </div>
    </div>
   
    )
}
export default CartItems