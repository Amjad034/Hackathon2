import Image from "next/image"
import NextPageButton from "@/components/NextPageButton";

import Link from "next/link";
import Car from "@/public/car02.png"
import Car4 from "@/public/car4.png"
import Pickup from "@/public/Pick-Up.png"
import Dropoff from "@/public/Drop-Off.png"
import { HiOutlineSwitchVertical } from "react-icons/hi";
import Spec from "@/public/Spesification(7).png"
import Spec2 from "@/public/Spesification(9).png"
import Car2 from "@/public/Car.png"
import Spec3 from "@/public/Spesification(10).png"
import Car3 from "@/public/Car(3).png"
import Profile from "@/public/Profil.png"
import Profill from "@/public/Profill.png"
import View1 from "@/public/View-1.png"

import View2 from "@/public/View-2.png"
import View03 from "@/public/View-03.png"


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




export default function Details(){
    return(
        
        <main className="">
        

  <section className="flex ml-4 gap-5">
        
    
     {/*Sidebar section*/}
<section>


{/* Filter Section */}


{/* Sidebar */}
<div className="w-[250px] h-[mix] pl-5 bg-white rounded-xl">
{/* Type Section */}
<div className="mb-8">
<h2 className="text-xs font-bold text-gray-400 mb-4 pt-5">TYPE</h2>
<ul className="space-y-2 font-bold">
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">Sport (10)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">SUV (12)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">MPV (6)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">Sedan (20)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">Coupe (14)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">Hatchback (14)</span>
</label>
</li>
</ul>
</div>
{/* Capacity Section */}
<div className="mb-8">
<h2 className="text-xs font-bold text-gray-400 mb-4">CAPACITY</h2>
<ul className="space-y-2 font-bold">
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">2 Person (10)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">4 Person (14)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">6 Person (12)</span>
</label>
</li>
<li>
<label className="flex items-center space-x-2">
<input type="checkbox" className="form-checkbox text-blue-500" />
<span className="text-gray-600">8 or More (16)</span>
</label>
</li>
</ul>
</div>
{/* Price Section */}
<div>
<h2 className="text-xs font-bold text-gray-400 mb-4">PRICE</h2>
<div className="flex items-center justify-between px-5 text-sm text-gray-600">
<span>Min: $0</span>
<span> Max: $100.00</span>
</div>
<input
type="range"
min={0}
max={100}
defaultValue={50}
className="w-full mr-5 pr-5 py-10"
/>
</div>
</div>

</section>



<div>
<section className="flex gap-3">

<section>
<div className="car bg-blue-600 px-5 py-6 text-white h-[258px] w-[425px]">
<h1 className="font-bold text-2xl">Sports car with the best</h1> 
<h1 className="mb-4 font-bold text-2xl">design and acceleration</h1>
<p className="font-light mb-7">
Safety and comfort while driving a<br />futuristics and elegant sports car.
</p>

<div className="imag h-[140px] w-[380px] mt-5 ml-24">
<Image src={Car4} alt="car"/></div>


</div>

<div className="flex mt-4 gap-5">
<Image src={View1} alt="car" className="w-32 h-32"/>
<Image src={View2} alt="car"className="w-32 h-32"/>
<Image src={View03} alt="car"className="w-32 h-32"/>
</div>

<div>
</div>

</section>




<section>
<div className="car-car ml-4 w-[320px] h-[396px] bg-white rounded-xl pl-3">
<div className="nisaan font-bold flex text-2xl gap-24 w-[160px] h-[80px]">
<h2 className="text-nowrap">Nissan GT – R</h2>
<i className="heart pr-3">❤️</i>
</div>
<div className="gap-2">
<span>⭐ 4.5</span>
<span className="reviewer"> 440+ Reviewer</span>
</div>
<p className="description">
NISMO has become the embodiment of Nissan's outstanding performance,
inspired by the most unforgiving proving ground, the "race track".
</p>
<div className="specs">
<div>
<span>Type Car</span>
<strong>Sport</strong>
</div>
<div>
<span>Capacity</span>
<strong>2 Person</strong>
</div>
<div>
<span>Steering</span>
<strong>Manual</strong>
</div>
<div>
<span>Gasoline</span>
<strong>70L</strong>
</div>
</div>
<div className="pricing">
<div className="price">
<strong>$80.00</strong>
<span className="discount mb-3">$100.00</span>
<span>/ days</span>
</div>
<button className="rent-now mr-5 mb-5">Rent Now</button>
</div>
</div>




</section>

</section>




{/* Rating Section */}
<section className="mt-7 bg-white w-[770px] p-5 rounded-lg shadow-lg">
  <div className="flex items-center gap-3">
    <h1 className="font-bold text-lg">Reviews</h1>
    <p className="text-xs text-white font-bold bg-blue-600 w-10 h-10 flex items-center justify-center rounded-lg">
      13
    </p>
  </div>

  {/* Review 1 */}
  <div className="mt-6">
    <div className="flex gap-3 items-start">
      <div className="rounded-full overflow-hidden w-12 h-12">
        <Image src={Profile} alt="Alex Stanton" />
      </div>
      <div>
        <h1 className="text-xl">Alex Stanton</h1>
        <p className="text-sm text-gray-500">CEO at Bukalapak</p>
      </div>
      <div className="ml-auto text-right">
        <h1 className="text-xs text-gray-500">21 July 2022</h1>
        <div className="flex justify-end space-x-1 mt-1">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
    </div>
    <p className="ml-14 text-sm text-gray-500 mt-3">
      We are very happy with the services of Morent Application. Morent has low prices and a large variety of cars with good and comfortable facilities. Additionally, the services provided by the officers are very friendly and polite.
    </p>
  </div>

  {/* Review 2 */}
  <div className="mt-6">
    <div className="flex gap-3 items-start">
      <div className="rounded-full overflow-hidden w-12 h-12">
        <Image src={Profill} alt="Skylar Dias" />
      </div>
      <div>
        <h1 className="text-xl">Skylar Dias</h1>
        <p className="text-sm text-gray-500">CEO at Amazon</p>
      </div>
      <div className="ml-auto text-right">
        <h1 className="text-xs text-gray-500">20 July 2022</h1>
        <div className="flex justify-end space-x-1 mt-1">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
    </div>
    <p className="ml-14 text-sm text-gray-500 mt-3">
      We are greatly helped by the services of Morent Application. Morent has low prices and a large variety of cars with good and comfortable facilities. Additionally, the services provided by the officers are very friendly and polite.
    </p>
  </div>
</section>






<div className="flex justify-between mx-auto">
<h1 className="text-slate-400 mt-10 mb-5">Recent Cars</h1>
<h1 className="text-blue-600 mt-10 mb-5">View all</h1>
</div>

<section className="flex gap-3">

<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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
      <div className="mt-24 w-48 ml-5 mb-5">
      <Image src={Spec} alt="specs"/></div>
      
        
        <div className="mt-5 flex self-end flex-wrap gap-5 items-end ">
          <h4 className="text-sm text-gray-800 font-normal flex-1 ml-5 mb-3">$99.00/day</h4>
          <button type="button"
            className="mr-5 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Rent
            now</button>
        </div>
      </div>
    



      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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




      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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



      
</section>



<div className="flex justify-between mx-auto">
<h1 className="text-slate-400 mt-10 mb-5">Recomended Cars</h1>
<h1 className="text-blue-600 mt-10 mb-5">View all</h1>
</div>


<section>

  <div className="flex gap-2">
 
  <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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





      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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



      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] h-[348px] w-[250px] py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
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

    
</div>

   

</section>

</div>
</section>



{/*Next Page */}
<div className="ml-[500px] my-10">
          
          <NextPageButton nextPage="/payment" label={"Show More"} /> 
        </div>
    

</main>
    )
}