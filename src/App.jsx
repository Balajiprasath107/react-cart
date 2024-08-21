import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Catlog from './components/catlog'
import CartSpace from './components/CartSpace'
import Footer from './components/Footer'
function App() {
  const [cartcount, setcartCount] = useState(0)
  const [show,setShow] = useState(false)
  const [arryitem,setarrayitem] = useState([])
  
  const productDetails = [
    {
       Name: "Product 1",
       sale : 0,
       rating : {
           star : 4,
           count : 5
       },
       price : 70.00,
       count:0
   },
   {
       Name: "Product 2",
       sale : 1,
       rating : {
           star : 5,
           count : 15
       },
       originalPrice : 20.00,
       price : 18.00 ,
       count:0
   },
   {
       Name: "Product 3",
       sale : 1,
       rating : {
           star : 5,
           count : 8
       },
       originalPrice : 50.00,
       price : 25.00,
       count:0
   },
    {
       Name: "Product 4",
       sale : 0,
       rating : {
           star : 2,
           count : 201
       },
       price : 40.00,
       count:0
   },
    {
       Name: "Product 5",
       sale : 1,
       rating : {
           star : 5,
           count : 18
       },
       originalPrice : 50.00,
       price : 25.00,
       count:0
   },
    {
       Name: "Product 6",
       sale : 0,
       rating : {
           star : 4,
           count : 5
       },
       price : 180.00,
       count:0
   },
    {
       Name: "Product 7",
       sale : 1,
       rating : {
           star : 4,
           count : 15
       },
       originalPrice : 20.00,
       price : 18.00 ,
       count:0
   },
   {
       Name: "Product 8",
       sale : 0,
       rating : {
           star : 5,
           count : 201
       },
       price : 40.00,
       count:0
   }
]

  return (
      <div>
        <Navbar cartcount={cartcount} setcartCount={setcartCount} show={show} setShow={setShow} arryitem={arryitem} setarrayitem={setarrayitem} />
        <Header/>
        <Catlog productDetails={productDetails}setcartCount={setcartCount} cartcount={cartcount}  arryitem={arryitem} setarrayitem={setarrayitem} />
        <Footer/>
      </div>
   
  )
}

export default App
