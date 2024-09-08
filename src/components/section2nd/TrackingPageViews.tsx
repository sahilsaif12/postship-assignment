import React from 'react';
import orderIcon from '../../assets/order.svg'
import eyeIcon from '../../assets/eye.svg'
const TrackingPageViews: React.FC = () => {
  return (
    <div className="p-4 bg-white col-span-2 rounded-lg border  shadow-md">
      <h2 className="text-lg font-bold">Tracking Page Views Vs Orders</h2>
      
      <p className="mt-2 text-gray-600">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
      <div className="mt-4 flex flex-col  gap-4 h-2/3 justify-end">
        <div className="p-5 rounded-lg bg-[#FFEBD5]">
            <div className="text-lg  font-semibold text-gray-800 t">Orders</div>
          <p className="text-gray-600 flex items-center justify-between">
          <h3 className="text-2xl font-bold">80</h3>
            <img src={orderIcon} className='w-8' /> 
          </p>
        </div>
        <div className="p-5 rounded-lg bg-[#FFC879]">
            <div className="text-lg  font-semibold text-gray-800 t">Tracking Page Views</div>
          <p className="text-gray-600 flex items-center justify-between">
          <h3 className="text-2xl font-bold">44</h3>
            <img src={eyeIcon} className='w-8' /> 
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default TrackingPageViews;
