import Head from 'next/head';

import { TbPoint } from "react-icons/tb";
import Visa from "@/public/Visa.png"
import Image from "next/image";
import Ic from "@/public/ic-security-safety.png"
import View1 from "@/public/View-1.png"

import { GoCircle } from "react-icons/go";
import Bitcoin from "@/public/Bitcoin.png"
import Paypal from "@/public/PayPal.png"
import NextPageButton from "@/components/NextPageButton";
export default function Payment(){
    return(
<main>

  <section className ="bg-gray-100 flex gap-4">
<section className="w-[680px] ml-7">
        <form className ="font-[sans-serif] my-10 max-w-4xl mx-auto bg-white rounded-xl">
          <div className ="mx-8 mt-10">
            <h1 className ="pt-10 font-bold">Billing Information</h1>
          <div className ="flex justify-between font-xs">
          <p className ="text-gray-400 mb-8">Please enter your billing info</p>
          <p className ="text-gray-400">
            step 1 of 4
          </p>
          </div>
          </div>



          
      <div className ="grid sm:grid-cols-2 gap-4">
        <div>
          <h1 className ="mb-2 ml-4">Name</h1>
        <div className ="relative flex items-center text-xs">
          <input type="text" placeholder="your name"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl ml-4" />
         </div>
        </div>

        <div className ="relative flex items-center">
         <div>
           <h1 className ="mb-2">Phone Number</h1>
          <input type="text" placeholder="Phone Number"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl mr-3/" />
          </div>
        </div>
</div>
      
    



    
      <div className ="grid sm:grid-cols-2 gap-4">
        <div>
          <h1 className ="mb-2 ml-4 mt-5">Address</h1>
        <div className ="relative flex items-center">
          <input type="text" placeholder="Address"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl ml-4" />
         </div>
        </div>

        <div className ="relative flex items-center mb-10">
         <div>
           <h1 className ="mb-2 mt-5">Town/City</h1>
          <input type="text" placeholder="Town or City"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl mr-5" />
          </div>
        </div>
        </div>

</form>




<form className ="font-[sans-serif] max-w-4xl mx-auto bg-white">
  <div className ="mx-5 mt-8">
<h1 className ="mt-8 pt-8 font-bold">Rental info</h1>
<div className ="text-gray-400 flex justify-between font-xs">
<p>please slect your rental date</p>
<p>step 2 of 4</p>
</div>
</div>  


<h1 className ="ml-7 my-7 flex"> <TbPoint />Pic-Up</h1>
         
      <div className ="grid sm:grid-cols-2 gap-4">
        <div>
          <h1 className ="mb-2 ml-4">Locations</h1>
        <div className ="relative flex items-center">
          <input type="text" placeholder="Slect your city"
            className ="px-4 py-3 ml-4 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl" />
         </div>
        </div>

        <div className ="relative flex items-center">
         <div> 
          <h1 className ="mb-2">Date</h1>
          <input type="text" placeholder="Slect your date"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl" />
          </div>
        </div>

        <div className ="relative flex items-center ml-4">
         <div className ="colom mb-10"><h1 className ="mb-2">Time</h1>
          <input type="email" placeholder="Slect your time"
            className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#599fea] rounded-xl" />
         </div> 
        </div>

       
      </div>

     
   




    <h1 className ="ml-7 my-7 flex"> <TbPoint />Drop-Off</h1>

      
<div className ="grid sm:grid-cols-2 gap-4 ml-4">
<div>
<h1 className ="mb-2">Locations</h1>
<div className ="relative flex items-center">
<input type="text" placeholder="Slect your city"
  className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl" />
</div>
</div>

<div className ="relative flex items-center">
<div> 
<h1 className ="mb-2">Date</h1>
<input type="text" placeholder="Slect your date"
  className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl" />
</div>
</div>

<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2">Time</h1>
<input type="email" placeholder="Slect your time"
  className ="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-[310px] text-xs border outline-[#599fea] rounded-xl" />
</div> 
</div>


</div>
</form>





<form className ="font-[sans-serif] max-w-4xl mx-auto bg-white mt-12 rounded-xl">
<div className ="mx-7 mt-10">
<h1 className ="pt-10">Payment Method</h1>
<div className ="text-gray-400 flex justify-between font-xs">
<p>please enter your payment method</p>
<p>step 3 of 4</p>
</div>
</div>  

<div className ="font-[sans-serif] max-w-4xl bg-slate-100 mt-12 mb-10 mx-5 rounded-xl">
  <div className ="flex justify-between mx-6">
<h1 className ="mt-12 mb-7 flex">CreditCard</h1>
<Image src={Visa} alt="card" className ="w-[90px] h-[20px] mt-10"/>
</div>
    


<div className ="grid sm:grid-cols-2 gap-4">
<div>
<h1 className ="mb-2 ml-4">CardNumber</h1>
<div className ="relative flex items-center">
<input type="text" placeholder="Card number"
  className ="px-4 py-3 ml-4 bg-white focus:bg-transparent text-black w-[310px] text-xs border outline-[#007bff] rounded-xl" />
</div>
</div>

<div className ="relative flex items-center">
<div> 
<h1 className ="mb-2">ExprationDate</h1>
<input type="text" placeholder="DD/MM/YY"
  className ="px-4 py-3 mr-5 bg-white focus:bg-transparent text-black w-[300px] text-xs border outline-[#007bff] rounded-xl" />
</div>
</div>


<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2 ml-4">CardHolder</h1>
<input type="email" placeholder="Card holder"
  className ="px-4 py-3 ml-4 bg-white focus:bg-transparent text-black w-[300px] text-xs border outline-[#599fea] rounded-xl" />
</div> 
</div>



<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2 mr-5">CVC</h1>
<input type="Card" placeholder="CVC"
  className ="px-4 py-3 mr-5 bg-white focus:bg-transparent text-black w-[300px] text-xs border outline-[#599fea] rounded-xl" />
</div> 
</div>
</div>
</div>




<div className ="space-y-6 pb-5">

<div className ="flex items-center bg-gray-100 w-[650px] h-[50px] mx-5 my-5 rounded-xl">
  <input type="radio" className ="w-5 h-5 bg-gray-200 ml-4"/>
  <div className="flex gap-[476px]">
  <label className ="text-sm text-black ml-4">PayPall</label>
  <Image src={Paypal} alt="card" className ="w-[60px] h-[20px]"/>
  </div>
</div>

<div className ="flex items-center bg-gray-100 w-[650px] h-[50px] mx-5 rounded-xl">
  <input type="radio" className ="w-5 h-5 bg-gray-200 ml-4"/>

  <div className="flex gap-[476px]">
  <label className ="text-sm text-black ml-4">Bitcoin</label>
  <Image src={Bitcoin} alt="card" className ="w-[60px] h-[15px]"/>
</div>
</div>
</div>
</form>




<form className ="font-[sans-serif] max-w-4xl mx-auto bg-white mt-12 rounded-xl">
  <h1 className ="font-bold pt-10 ml-4">Conformation</h1>
  <p className ="text-gray-400 ml-4 mb-7">We are getting to the end. Just few clicks and your rental is ready!</p>




<div className ="space-y-6">

  <div className ="flex items-center bg-gray-100 w-[640px] h-[50px] mx-5 my-5 rounded-xl">
    <input type="check" className ="w-5 h-5 bg-white border-2 ml-4"  />
    <label className ="text-sm text-black ml-4">I agree with sending an Marketing and Newsletter emails. No spam, no promissed!</label>
  </div>

  <div className ="flex items-center bg-gray-100 w-[640px] h-[50px] mx-5 my-5 rounded-xl">
    <input type="check" className ="w-5 h-5 bg-white ml-4 border-2"  />
    <label className ="text-sm text-black ml-4">I agree with our terms, condition and privacy policy</label>
  </div>
  </div>
<div>
  <button className="bg-blue-500 w-30 h-10 px-4 py-2 ml-4 mt-10 text-white rounded-xl">Rent Now</button>
</div>

<div className="ml-4 my-10">
<Image src={Ic} alt="card" className ="w-[32px] h-[32px]"/>
<h1 className="font-thin mt-4">All your data are safe</h1>
<p className="text-sm text-gray-400 pb-6">we using the most advance security to provide you best experience ever.</p>
</div>
</form>
</section>



<section className="w-[340px] h-[360px] mt-10 bg-white px-5 py-8 rounded-xl">

    <div className="Container">
      <h2 className="title text-xl">Rental Summary</h2>
      <p className="subtitle text-sm text-wrap text-gray-300">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>

      <div className="carImage flex gap-3">
        <Image
          src={View1}
          alt="Nissan GT-R"
          className="carImage" />
        <div className="carDetails">
          <h3 className="carTitle">Nissan GT – R</h3>
          <p className="rating">
            ⭐⭐⭐⭐ <span className="reviews text-nowrap">440+ Reviewer</span>
          </p>
        </div>
      </div>

      <div className="priceSection">
        <div className="priceRow justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span>$80.00</span>
        </div>
        <div className="priceRow justify-between">
          <span className="text-gray-400">Tax</span>
          <span>$0</span>
        </div>

        <div className="promoCodeSection text-xs">
          <input
            type="text"
            placeholder="Apply promo code"
            aria-placeholder=""
            className="promoInput"
          />
          <button className="applyButton font-bold">Apply now</button>
        </div>

        <div className="TotalRentalPrice">
          <span>Total Rental Price</span>
          <span>$80.00</span>
        </div>
        <p className="totalPriceNote">Overall price and includes rental discount</p>
      </div>
    </div>



</section>
</section>

<div className="ml-[500px] my-10">
          
          <NextPageButton nextPage="/dashboard" label={"Show More Cars"} /> 
        </div>
    
    </main>

    )
}