import React, { useState } from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";

const Left = ({card,handleHert, disabled}) => {



    const [isTrue, setIsTrue] = useState(true)

    // const color = (x) => {
    //     setIsTrue(x)
    //     console.log(x)
    // }
console.log(isTrue)
    return (
        <div>
            <div className="card bg-base-100 w-64 shadow-sm">
                <figure>
                    <img className='h-[150px] w-[300px] '
                    src={card.image} />
                </figure>
                <div className='text-center pt-6'>
                    <p>Current Bid: <span className='ml-3 font-bold'>${card.currentBidPrice}</span></p>
                    <p>time Left: <span className='ml-3 font-bold'>{card.timeLeft}</span></p>

                        <p>Bid Now: 
                            {
                            
                                !disabled?
                                
                                <FaHeart
                                    onClick={()=>{handleHert(card);setIsTrue(prv=>!prv)}}
                                    className='
                                    inline 
                                    cursor-pointer
                                    hover:text-[#e02e45]
                                    ml-3
                                    '  size={25}
                                /> 
                                
                                : 

                                <FaHeart 
                                    onClick={disabled? undefined : ()=>{handleHert(card);setIsTrue(prv=>!prv)}}
                                    className='
                                    inline 
                                    cursor-not-allowed
                                    text-[#e02e45]
                                    
                                    ml-3
                                    '  size={25}
                                />

                            }
                        </p>
                     
                    
                     



                    {/* <p>Bid Now:<FaHeart
                     onClick={()=>handleHert(card)}
                     className='
                     inline 
                     cursor-pointer
                     hover:text-[#e02e45]
                     ml-3
                     '  size={25}/></p> */}
                </div>
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p>{card.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>


        // <div className=" bg-[#ffffff]">
                        
        //                 <div className="flex justify-between px-4 py-2 ">
        //                     <div className="flex justify-between">
        //                         <div className='flex'>
        //                             <img  className='h-[96px] w-[96px] rounded-2xl' src={card.image} alt="" />
        //                             <h1 className="text-[18px] font-semibold ml-5">{card.title}</h1> 
        //                         </div>
                                   
                                  
        //                         <h1 className='mr-20'>${card.currentBidPrice}</h1>
        //                         <h1 className="mr-20">Bids: {card.bidsCount}</h1>
                                
        //                     </div>
        //                     <p onClick={()=>handleHert(card)} className="mt-1 cursor-pointer"><GiSelfLove size={20}/></p>
        //                 </div> 
        //             </div>
    );
};

export default Left;