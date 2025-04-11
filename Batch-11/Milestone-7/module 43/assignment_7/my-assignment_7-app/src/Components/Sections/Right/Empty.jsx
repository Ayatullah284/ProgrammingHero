import React from 'react';

const Empty = () => {
    return (
        <div>
            <div>
                <div className='bg-[#ffffff] pt-6 rounded-b-xl'>
                    <h1 className='text-2xl'>No Favorites yet</h1>
                    <p className=' pb-6'>Click the heart icon on any item to add it to your favorites</p>
                    <hr className=''/>
                    <div className=' mx-4 flex justify-around pt-11 pb-5'>
                            <p className='text-xl font-bold'>Total bids Amount:</p>
                            <p className='text-xl font-bold'>$<span>000.00</span></p>
                        </div> 
                 </div>
            </div>
        </div>
    );
};

export default Empty;