import React from 'react';

interface Button {
  text: string;
  action: () => void;
  color:string
}

interface CardProps {
  title: string;
  description: string;
  buttons: Button[]; 
  icon?: React.ReactNode;
  bgColor?: string;
  borderColor?:string;
}

const Card: React.FC<CardProps> = ({ title, description, buttons, icon, bgColor ,borderColor}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md border ${borderColor}  ${bgColor}`}>
      <div className="flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <h2 className="text-xl text-gray-700 font-bold">{title}</h2>
      </div>
      <p className="my-2 text-gray-700">{description}</p>
      <div className="mt-4 space-x-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-2.5 py-1 bg-gray-800 ${button.color=='light'?"bg-white text-black hover:bg-white/80": "text-white"} shadow-md  rounded-xl hover:bg-gray-900`}
            onClick={button.action}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
