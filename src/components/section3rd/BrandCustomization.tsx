import React, { useState } from 'react';

const BrandCustomization: React.FC = () => {
  const [accentColor, setAccentColor] = useState('#FF9898');
  const [textColor, setTextColor] = useState('#571010');
  const [backgroundColor, setBackgroundColor] = useState('#FFEEEA');

  return (
    <div className="p-5 border border-gray-300 shadow-gray-400/60 shadow-lg  bg-white flex flex-col justify-between  rounded-2xl">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
      <p className="mb-4 text-gray-600">Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
      
      <div className="space-y-5 ">
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Accent Color</label>
          <input
            type="text"
            className="w-24 border rounded-md p-1"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
          />
          <div className="w-12 rounded-lg h-6" style={{ backgroundColor: accentColor }} />
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Text Color</label>
          <input
            type="text"
            className="w-24 border rounded-md p-1"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <div className="w-12 rounded-lg h-6" style={{ backgroundColor: textColor }} />
        </div>

        <div className="flex items-center space-x-2">
          <label className="font-semibold">Background Color</label>
          <input
            type="text"
            className="w-24 border rounded-md p-1"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <div className="w-12 rounded-lg  h-6" style={{ backgroundColor: backgroundColor }} />
        </div>
      </div>

      <div className="mt-4 space-x-3">
        <button className="px-3 rounded-lg py-1 bg-gray-200 ">Preview</button>
        <button className="px-3 rounded-lg py-1 bg-black text-white ">Apply Colors</button>
      </div>
    </div>
  );
};

export default BrandCustomization;
