import React from 'react';

const StarFacts: React.FC = () => {
    return (
        <div className="p-4 bg-[#956F00]  rounded-lg shadow-md">
            <h2 className="text-lg text-white font-bold">Star Facts about your orders!!!</h2>
            <div className="flex flex-col text-white/80  h-4/6 justify-evenly">

                <p>

                    There are 8 shipments that have been out for delivery for more than 3 days. <br />
                </p>
                <p>

                    There are 5 shipments in exception right now
                </p>
                 <p className="mt-2">The maximum chargebacks are from Miami.</p>

            </div>
           <button className="mt-4 px-4 py-1.5 bg-white rounded-xl text-black rounded-md">Check Orders Page</button>

        </div>
    );
};

export default StarFacts;
