"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import View1 from "@/public/View-1.png"
import Car4 from "@/public/car4.png"
import Car3 from "@/public/Car(3).png"
import Car01 from "@/public/Car01.png"
import Car02 from "@/public/car02.png"
import Image  from "next/image"
import Maps from "@/public/Maps.png"
import Car from "@/public/Look.png"
import NextPageButton from "@/components/NextPageButton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  
} 

from "@/components/ui/card"



import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <main>


      <section className="flex">
<section className="mainSection1 flex">
      

{/* Sidebar section*/}
    <section className="rounded-xl bg-white ml-5">
        <div className="sidebar">
        <div className="menu-section">
          <p className="section-title">MAIN MENU</p>
          <ul className="menu-list">
            <li className="menu-item active">
              <span className="menu-icon">🏠</span>
              <span className="menu-text">Dashboard</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Car Rent</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Insight</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Reimburse</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Inbox</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Calendar</span>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <p className="section-title">PREFERENCES</p>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Settings</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Help & Center</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon"></span>
              <span className="menu-text">Dark Mode</span>
            </li>
          </ul>
        </div>
        <div className="logout-section mt-10">
          <span className="menu-icon"></span>
          <span className="menu-text">Log Out</span>
        </div>
      </div>
      
      </section>







<section className="ml-5 rounded-xl bg-white w-[400px]">
     
{/* Location section....pending */}


<div className="rounded-xl mx-5 pt-5">
  <h1 className="mb-3">Details Rentel</h1>

  <Image
          src={Maps}
          alt="Map"/>
  </div>



  <div className="flex gap-5 px-5 py-5">
        <Image
          src={Car}
          alt="Nissan GT-R"
          className=""/>


  
        <div className="carDetail">
          <h3 className="text-xl font-bold">Nissan GT – R</h3>
          <p className=" text-gray-500 font-semibold">
            Sport Car
          </p>
        </div>
      </div>

      

    <h1 className ="ml-8 mb-4">Pick-Up</h1>
    <div className="flex gap-5">
      
<div className ="ml-4">

<h1 className ="mb-2 ml-2">Locations</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        Kota Semarang
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
        
        
        
      </ul>
    

      </div>
    
</div>



<div className ="relative flex items-center">
<div className ="colom mb-5"><h1 className ="mb-2">Date</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        20 July 2022
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
        
      </ul>

</div>
</div>


<div className ="relative flex items-center">
<div className ="colom mb-5"><h1 className ="mb-2">Time</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        07:00
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
       
      </ul>

</div>
</div>
</div>
</div>
</div>





<h1 className ="ml-8 mb-4">Drop-Off</h1>
    <div className="flex gap-5">
      
<div className ="ml-4">

<h1 className ="mb-2 ml-2">Locations</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        Kota Semarang
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
        
      </ul>
    

      </div>
    
</div>



<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2">Date</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        21 July 2022
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
       
      </ul>

</div>
</div>


<div className ="relative flex items-center">
<div className ="colom mb-10"><h1 className ="mb-2">Time</h1>
<div className="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        className="px-2 py-2  text-xs text-gray-500">
        01:00
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        
       
      </ul>

</div>
</div>
</div>
</div>l
</div>



<div className="priceRow gap-28 text-lg font-bold ml-5">
          <span>Total Rental Price</span>
          <span>$80.00</span>
        </div>
        <p className="totalPriceNote pl-5 pb-5">Overall price and includes rental discount</p>
</section>
</section>




  {/* Chart */}

<div className="mainSection2 ml-5">

<section className="gap-4 pr-5 py-5 bg-white rounded-xl">
<h1 className="ml-5 text-xl mb-7 font-bold">Top 5 CarRental</h1>
<div className="flex">


    <div className="circularChartContainer gap-2">
   
      <svg className="circularChart" width="170" height="170" viewBox="0 0 36 36">
        
        {/* Background circle */}
        
        <circle
          className="circle-bg"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#f3f3f3"
          strokeWidth="3.5"
        />
        {/* Segments */}
        <circle
          className="circle-segment sport"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#23437a"
          strokeWidth="3.5"
          strokeDasharray="25 75"
          strokeDashoffset="0"
        />
        <circle
          className="circle-segment coupe"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#4069af"
          strokeWidth="3.5"
          strokeDasharray="20 80"
          strokeDashoffset="-25"
        />
        <circle
          className="circle-segment suv"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#69a5dc"
          strokeWidth="3.5"
          strokeDasharray="15 85"
          strokeDashoffset="-45"
        />
        <circle
          className="circle-segment hatchback"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#88c0f2"
          strokeWidth="3.5"
          strokeDasharray="10 90"
          strokeDashoffset="-60"
        />
        <circle
          className="circle-segment mpv"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#c3e1fa"
          strokeWidth="3.5"
          strokeDasharray="10 90"
          strokeDashoffset="-70"
        />
      </svg>

      {/* Text */}
      <div className="chartText">
        <p className="number">72,030</p>
        <p className="label font-bold">Rental Car</p>
      </div>
    </div>
  




<div>
        {/* Legend */}
        <ul className="legend">
          <li className="pb-5">
            <span className="color sport"></span> Sport Car{" "}
            <span className="count">17,439</span>
          </li>
          <li className="pb-5">
            <span className="color suv"></span> SUV <span className="count">9,478</span>
          </li>
          <li className="pb-5">
            <span className="color coupe"></span> Coupe{" "}
            <span className="count">18,197</span>
          </li>
          <li className="pb-5">
            <span className="color hatchback"></span> Hatchback{" "}
            <span className="count">12,510</span>
          </li>
          <li py-5>
            <span className="color mpv"></span> MPV <span className="count">14,406</span>
          </li>
        </ul>
      
        </div>
</div>
    
    </section>














<section className="rounded-xl mt-5 pl-5 bg-white pt-5">
 <div className="flex gap-32 mb-10">
   <h1>
    Recent Transaction
  </h1>
  <h3 className="text-blue-600 pr-3">View All</h3>
  </div>
<div className="flex gap-3 w-[90px] h-[28px] mb-10">
<Image src={Car4} alt="car"/>

<div className="flex gap-24">
<div>
  <h1 className="text-xs font-semibold text-nowrap">Nissan GT-R</h1>
  <h3 className="text-gray-400 text-xs">Sport Car</h3>
</div>

<div>
  <h3 className="text-gray-400 text-xs text-nowrap">20 July</h3>
  <h1>$80.00</h1>
</div>
</div>
</div>






<div className="flex gap-2 mb-10">
<Image src={Car02} alt="car" className="w-[90px] h-[28px]"/>


<div className="flex gap-24">
<div className="font-semibold text-xs">
  <h1>Koegnigsegg</h1>
  <h3 className="text-gray-400">Sport Car</h3>
</div>


<div>
  <h3 className="text-gray-400 text-xs text-nowrap">19 July</h3>
  <h1>$99.00</h1>
  </div>
</div>
</div>



<div className="gap-3 flex mb-10">
<Image src={Car01} alt="car" className="w-[90px] h-[28px]"/>



<div className="flex gap-24">
<div className="text-xs font-semibold">
  <h1> Rolls-Royce</h1>
  <h3 className="text-gray-400">Sport Car</h3>
</div>



<div>
  <h3 className="text-gray-400 text-xs">18 July</h3>
  <h1>$96.00</h1>
  </div>
</div>
</div>







<div className="flex gap-3 pb-5">
<Image src={Car3} alt="car" className="w-[90px] h-[28px]"/>


<div className="flex gap-32">
<div className="font-semibold text-xs">
  <h1>CR-V</h1>
  <h3 className="text-gray-400">suv</h3>
</div>


<div>
  <h3 className="text-gray-400 text-xs">17 July</h3>
  <h1>$80.00</h1>
  </div>
  </div>
</div>
</section>

</div>


</section>


<div className="ml-[500px] my-10">
      
      <NextPageButton nextPage="/"  label ={"Show More Cars"} />
    </div>



         </main>
    );
}

     
         
 
     



    