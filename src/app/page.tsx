import Image from "next/image";


import Car from "@/public/car02.png"
import Car4 from "@/public/car4.png"

import { HiOutlineSwitchVertical } from "react-icons/hi";
import Spec from "@/public/Spesification(7).png"
import Spec2 from "@/public/Spesification(9).png"
import Car2 from "@/public/Car.png"
import Spec3 from "@/public/Spesification(10).png"
import Car3 from "@/public/Car(3).png"

import Spec10 from "@/public/Spesification(10).png"
import Spec11 from "@/public/Spesification(11).png"
import Spec14 from "@/public/Spesification(14).png"

import Spec13 from "@/public/Spesification(13).png"
import Spec15 from "@/public/Spesification(15).png"
import Spec12 from "@/public/Spesification(12).png"
import Car0 from "@/public/Car(2).png"
import Car5 from "@/public/Car(5).png"
import Car6 from "@/public/Car(6).png"
import Car7 from "@/public/Car(7).png"
import Car8 from "@/public/Car(8).png"
import Car9 from "@/public/Car(9).png"

import Car10 from "@/public/Car(10).png"
import Car11 from "@/public/Car(11).png"
import Car12 from "@/public/Car(12).png"
import NextPageButton from "@/components/NextPageButton";
import { Head } from "next/document";





export default function Home() {
  return (
   <main>


     <section className="flex gap-8 justify-items-betwenn mx-10">

 <div className="card1  bg-blue-400  px-5 py-6 text-white">
   <h1 className="font-bold text-2xl">The Best Platform</h1> 
   <h1 className="mb-4 font-bold text-2xl">for Car Rental</h1>
   <p className="font-light mb-7">
   Ease of doing a car rental and safely and <br /> 
   reliably. Of course at a low price.
   </p>
   <a href="#" className="button bg-blue-600 p-3 5">
     Rental Car
   </a>
   <div className="car ml-20 mt-3 justify-items-betwenn place-items-center text-center">
    <Image src={Car} alt="Casr"/> </div>



 </div>

 <div className="card2  bg-blue-600 px-5 py-6 text-white">
   <h1 className="font-bold text-2xl">Easy way to rent a</h1> 
   <h1 className="mb-4 font-bold text-2xl">Car at a lower price</h1>
   <p className="font-light mb-7">
   Providing cheap car rental <br />safe and comfortab facilities.
   </p>
   <a href="#" className="button bg-blue-400 p-3 5">
     Rental Car
   </a>
   <div className="ml-20 mt-3 ml-4">
    <Image src={Car4} alt="car"/></div>
  


</div>

</section>











<section className="flex bg-white mt-10 mx-5 gap-20 rounded-xl">
  <div>
<h1 className ="px-5 pt-5 mb-3 font-bold">Pick-Up</h1>
    <div className="flex gap-5">
      
<div className ="ml-4">

<h1 className ="mb-2 ml-2 font-bold">Locations</h1>





<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your city
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50text-s text-gray-800 m cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>
    

      </div>
    
</div>



<div className ="relative flex items-center">
<div className ="colom mb-5"><h1 className ="mb-2 font-bold">Date</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your date
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>

</div>
</div>


<div className ="relative flex items-center">
<div className ="colom mb-5"><h1 className ="mb-2 font-bold">Time</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your Time
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>

</div>
</div>
</div>
</div>
</div>
</div>



<button className="bg-blue-600 w-12 h-12 mt-10 rounded-xl text-white p-3"><HiOutlineSwitchVertical /></button>


<div>
<h1 className ="px-5 pt-5 mb-3 font-bold">Drop-Off</h1>
    <div className="flex gap-5">
      
<div className ="ml-4">

<h1 className ="mb-2 ml-2 font-bold">Locations</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your city
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>
    

      </div>
    
</div>



<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2 font-bold">Date</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your date
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>

</div>
</div>


<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2 font-bold">Time</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500 font-bold">
        Slect your time
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car1</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car2</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car3</li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Car4</li>
      </ul>

</div>
</div>
</div>
</div>
</div>
</div>

</section>



<div className="flex justify-between mx-10">
<h1 className="text-slate-400 mt-10 mb-5">Popular Car</h1>
<h1 className="text-blue-600 mt-10 mb-5">View all</h1>
</div>

<section className="flex gap-3 m-5 ml-10">

<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">Koenigsegg</h3>
        
        

        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
          viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sport</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car} alt="car"/>
      </div>
      <div className="my-6 w-40 ml-5">
      <Image src={Spec} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$99.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
        </div>
      </div>
    



      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">Nissan GT-R</h3>
        
        

        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
          viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sport</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car4} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec3} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$88.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
        </div>
      </div>




      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">Rolls Royce</h3>
        
       

        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
          viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sport</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car2} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec2} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$96.00/day</h4>
          
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
        </div>
      </div>




      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">Nissan GT-R</h3>
        
       

        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
          viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sport</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car4} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$88.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
        </div>
      </div>
</section>







<h1 className="text-slate-400 mt-10 mb-5 ml-10">Rcomended Cars</h1>



<section>

  <div className="flex gap-3 ml-10">
 
  <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-lg text-gray-800 font-bold flex-1">All New Shovy</h3>
<svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
          viewBox="0 0 64 64">
            <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
          
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sub</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car0} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec10} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$88.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
            
        </div>
      </div>









      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-lg text-gray-800 font-bold flex-1">CR-V</h3>
   <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
          viewBox="0 0 64 64">
            <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
          
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sub</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car3} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec11} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$80.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
            
        </div>
      </div>
 







      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-lg text-gray-800 font-bold flex-1">All New Terios</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
          viewBox="0 0 64 64">
            <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
          
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sub</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car4} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec12} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$74.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
            
        </div>
      </div>







      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-lg text-gray-800 font-bold flex-1">CR-V</h3>

        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
          viewBox="0 0 64 64">
            <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
          
        </svg>
      </div>
      <h4 className="text-slate-400 ml-7">sub</h4>
      <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
      <Image src={Car6} alt="car"/>
      </div>
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec13} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$80.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
            
        </div>
      </div>
      </div>





      <div className="flex gap-3 mt-4 ml-10">
 
 <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
     <div className="flex items-center gap-2 px-6">
       <h3 className="text-lg text-gray-800 font-bold flex-1">All New Shovy</h3>
<svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
         viewBox="0 0 64 64">
           <path
           d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
           data-original="#000000"></path>
         
       </svg>
     </div>
     <h4 className="text-slate-400 ml-7">sub</h4>
     <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
     <Image src={Car0} alt="car"/>
     </div>
     <div className="mt-24 w-48 ml-5 mb-5">
     <Image src={Spec10} alt="specs"/></div>
     
       
       <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
         <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$88.00/day</h4>
         <button type="button"
           className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
           now</button>
           
       </div>
     </div>









     <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
     <div className="flex items-center gap-2 px-6">
       <h3 className="text-lg text-gray-800 font-bold flex-1">CR-V</h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
         viewBox="0 0 64 64">
           <path
           d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
           data-original="#000000"></path>
         
       </svg>
     </div>
     <h4 className="text-slate-400 ml-7">sub</h4>
     <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
     <Image src={Car12} alt="car"/>
     </div>
     <div className="mt-24 w-48 ml-5 mb-5">
     <Image src={Spec14} alt="specs"/></div>
     
       
       <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
         <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$80.00/day</h4>
         <button type="button"
           className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
           now</button>
           
       </div>
     </div>








     <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
     <div className="flex items-center gap-2 px-6">
       <h3 className="text-lg text-gray-800 font-bold flex-1">MG ZX E</h3>
       <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-red-600 shrink-0"
         viewBox="0 0 64 64">
           <path
           d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
           data-original="#000000"></path>
         
       </svg>
     </div>
     <h4 className="text-slate-400 ml-7">sub</h4>
     <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
     <Image src={Car11} alt="car"/>
     </div>
     <div className="mt-24 w-48 ml-5 mb-5">
     <Image src={Spec15} alt="specs"/></div>
     
       
       <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
         <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$74.00/day</h4>
         <button type="button"
           className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
           now</button>
           
       </div>
     </div>







     <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[304px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
     <div className="flex items-center gap-2 px-6">
       <h3 className="text-lg text-gray-800 font-bold flex-1">New MDZS</h3>

       <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-gray-600 shrink-0"
         viewBox="0 0 64 64">
           <path
           d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
           data-original="#000000"></path>
         
       </svg>
     </div>
     <h4 className="text-slate-400 ml-7">sub</h4>
     <div className="h-[62px] w-[242px]  py-10 px-5 items-center mb-5">
     <Image src={Car12} alt="car"/>
     </div>
     <div className="mt-24 w-48 ml-5 mb-5">
     <Image src={Spec14} alt="specs"/></div>
     
       
       <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
         <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$80.00/day</h4>
         <button type="button"
           className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
           now</button>
           
       </div>
     </div>
     </div>

</section>





<section>







 


</section>





<div className="ml-[500px] my-10">
          
          <NextPageButton nextPage="/catagory" label={"Show More Cars"} /> 
        </div>
    



</main>
   

  );
}
