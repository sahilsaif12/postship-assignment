import React from 'react';
import icon1 from '../../assets/Paypal.png'
import icon2 from '../../assets/Ali reviews.png'
import icon3 from '../../assets/Instagram feed.png'
import icon4 from '../../assets/Google analytics.png'
import icon5 from '../../assets/Shopify flow.png'
const Integration: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 shadow-gray-400/60 shadow-lg  bg-white rounded-lg ">
      <h2 className="text-lg font-bold text-gray-700 mb-2">Explore Our Integrated Ecosystem</h2>
      <p className="text-gray-600 mb-4">Discover a variety of popular integrations tailored for your convenience.</p>
      <div className="flex space-x-4 mb-4">
        <img src={icon1} alt="" className='' />
        <img src={icon2} alt="" className='' />
        <img src={icon3} alt="" className='' />
        <img src={icon4} alt="" className='' />
        <img src={icon5} alt="" className='' />
      
      </div>
      <button className="px-3 rounded-lg py-1 bg-black text-white ">Explore Integrations</button>
    </div>
  );
};

export default Integration;
