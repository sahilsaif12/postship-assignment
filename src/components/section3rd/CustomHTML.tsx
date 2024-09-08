import React, { useState } from 'react';

const CustomHTML: React.FC = () => {
  const [htmlValue, setHtmlValue] = useState('');

  return (
    <div className="p-4 border border-gray-300 shadow-gray-400/60 shadow-lg flex flex-col justify-between bg-white rounded-lg ">
      <h2 className="text-lg font-bold text-gray-700 mb-2">Seamlessly Integrate Custom HTML Elements</h2>
      <p className="text-gray-600 mb-4">Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
      
      <textarea
        className="w-full p-2 border rounded-md"
        rows={4}
        value={htmlValue}
        onChange={(e) => setHtmlValue(e.target.value)}
        placeholder="HTML Link"
      />

      <div className="mt-4 space-x-2">
        <button className="px-3 rounded-lg py-1 bg-gray-200 ">Preview</button>
        <button className="px-3 rounded-lg py-1 bg-black text-white ">Apply Changes</button>
      </div>
    </div>
  );
};

export default CustomHTML;
