import React from 'react';
import TimeFilter from './TimeFilter';
import ShipmentUpdates from './ShipmentUpdates';
import StarFacts from './StarFacts';
import TrackingPageViews from './TrackingPageViews';
const MetricsContainer: React.FC = () => {
  return (
    <div className="p-6 bg-[#FFF7EE]  ">
      <h1 className="text-2xl  font-semibold text-gray-800 mb-6">Instant Dive into Your Performance Metrics</h1>
      
      {/* Time Filters */}
      <TimeFilter/>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-5  gap-6 mt-6">
        <ShipmentUpdates/>
        <StarFacts />
        <TrackingPageViews/>
      </div>
    </div>
  );
};

export default MetricsContainer;
