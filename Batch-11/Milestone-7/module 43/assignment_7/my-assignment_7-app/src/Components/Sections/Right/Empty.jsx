import React from 'react';

const Empty = () => {
    return (
        <div>
            <div>
                <div className='bg-[#ffffff] pt-3 rounded-b-xl'>
                    <h1 className='text-2xl'>No Favorites yet</h1>
                    <p className=' pb-5 mx-4'>Click the heart icon on any item to add it to your favorites</p>
                    <hr className=''/>
                        <div className=' flex pt-8 pb-5 bg-[#ffffff] rounded-b-xl'>
                            <p className='text-xl font-bold ml-10'>Total bids Amount:</p>
                            <p className='text-xl font-bold ml-10'>$<span>000.00</span></p>
                        </div> 
                 </div>
            </div>
        </div>
    );
};

export default Empty;