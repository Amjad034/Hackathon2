export default function Sidebar(){
    return(
        <section>
        {/* Filter Section */}



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
<div className="flex items-center justify-between px-5 text-sm text-blue-600">
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
    )
}