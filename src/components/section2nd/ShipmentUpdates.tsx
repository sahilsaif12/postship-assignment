import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Delivered', value: 40, color: '#FFC879' },
  { name: 'Out for delivery', value: 30, color: '#FFDDB6' },
  { name: 'Intransit', value: 15, color: '#956F00' },
  { name: 'Pending', value: 8, color: '#E5A500' },
  { name: 'Exception', value: 7, color: '#5E4200' },
];

const ShipmentUpdates: React.FC = () => {
    const [active, setactive] = useState(data[0].name)
  return (
    <div className="p-4 bg-white border col-span-2 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Shipment Updates</h2>
        <span>Total Orders: 394</span>
      </div>
      <div className="  items-center mt-4">
        <div className="flex flex-wrap gap-3 mb-4">
          {data.map((item, index) => (
            <button key={index} onClick={()=>setactive(item.name)} className={`px-2 ${active==item.name ? "bg-gray-800 text-white" :" bg-gray-200  text-gray-500" } py-1 text-sm rounded-md font-semibold`} >
              {item.name}
            </button >
          ))}
        </div>
        <div className=" h-56  my-4 ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart >
              <Pie data={data} dataKey="value" cx="50%" cy="50%" label
              labelLine={false}
            outerRadius={80}
            innerRadius={40}
               
               >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`}  fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.map((item, index) => (
            <div key={index} className={`px-2 py-0.5  text-sm rounded-md font-`}  >
                <span className={`px-3 rounded-lg mr-2 text-transparent bg-[${item.color}]`}  style={{backgroundColor: item.color}}> •</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentUpdates;
