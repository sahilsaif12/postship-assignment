import React from 'react';
import Card from './Card'; 
import {  useNavigate } from 'react-router-dom';
import alertIcon from '../../assets/AlertTriangle.svg'
import iIcon from '../../assets/iIcon.svg'
import { useToast } from '@/hooks/use-toast';

const Front: React.FC = () => {
    const { toast } = useToast()

    const navigate=useNavigate()
  return (
    <div className="p-6 md:py-10 bg-[#ffffff] ">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">Welcome, John Mathew!!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title="Order Sync Successful!"
          description="Your order details from the last 30 days have been successfully synced. Check them out now!"
          buttons={[
            { text: "Explore Your Orders", action: () => navigate('/orders'), color:"dark" }
          ]}
          bgColor="bg-white"
          borderColor='border-gray-300'
        />

        <Card
          title="Customize Customer Notification"
          description="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers"
          buttons={[
            { text: "Configure Notifications", action: () => navigate('/notifications'), color:"dark" }
          ]}
          icon={<img className='w-7' src={alertIcon} /> }
          bgColor="bg-yellow-100" 
          borderColor="border-yellow-300" 
        />

        <Card
          title="Your Tracking Link has been generated"
          description="Include the Link to Your Store's Navigation Menu."
          buttons={[
            { text: "Copy Link", action: () => {
                toast({
                    className:"bg-gray-200 border border-gray-400/60",
                    description: "Your link is copied",
                  })
          
            },
         color:"light"
        },
            { text: "Go To Navigation Menu", action: () => navigate('/navigation') ,

                color:"dark"
            }
          ]}
          icon={<img className='w-5' src={iIcon} /> }
          bgColor="bg-blue-100"
          borderColor="border-blue-300"
        />
      </div>
    </div>
  );
};

export default Front;
