import React from 'react';
import BrandCustomization from './BrandCustomization';
import IntegratedEcosystem from './Integration';
import CustomHTMLElements from './CustomHTML';
import OnboardingSupport from './OnboardingSupport';

const FunctionalityContainer: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 ">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Discover the Heart of Our Functionality</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BrandCustomization />
        <div className="flex flex-col space-y-6">
          <OnboardingSupport/>
          <IntegratedEcosystem />
        </div>
        <CustomHTMLElements />
      </div>
    </div>
  );
};

export default FunctionalityContainer;
