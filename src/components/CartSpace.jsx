import CartItems from "./CartItems"



function CartSpace({arryitem,setarrayitem,cartcount,setcartCount}){
     return(
         <div className="ms-3 p-2 border border-black z-3 positon-absolute float-lg-end bg-white overflow-auto" style={{width:"450px",height:"500px"}}> 
         {
            
            arryitem.map((item,index)=>{
                return(
                <CartItems item={item} key={`${item.name}-${index}`} count={item.count} cartcount={cartcount} setcartCount={setcartCount} arryitem={arryitem} setarrayitem={setarrayitem} />
            )}
            )
         }
         {
        arryitem.length>0?
        <div className="btn btn-success">checkout</div>:<div className="h2 text-align-center justify-content-center">
        <div className="my-3 font-monospace">Cart is empty add something</div>
        <img className="my-3" src="/img/untitled.jpg" alt="" />
        </div>
        } 
         </div>
     )

}
export default CartSpace