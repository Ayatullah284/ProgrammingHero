import { GiSelfLove } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Right = ({hert, handleDelete}) => {
        return (
            <div className=" bg-[#ffffff]">
                
                <div className="flex justify-between px-4 py-2">
                    <div className="flex">
                        <img  className='h-[96px] w-[96px] rounded-2xl' src={hert.image} alt="" />
                        <div className="ml-4">
                            <div className="flex">
                                <h1 className="text-[18px] font-semibold">{hert.title}</h1>
                            </div>
                            
                            <div className="flex mt-3">
                                <h1>${hert.currentBidPrice}</h1>
                                <h1 className="ml-5">Bids: {hert.bidsCount}</h1>
                            </div>
                        </div>
                    </div>
                    <p onClick={()=>handleDelete(hert.id,hert.currentBidPrice)} className="  "><RxCross1 className="hover:text-[#e02e45] mt-1 cursor-pointer" size={22}/></p>
                </div>
                <hr className=''/> 
            </div>
        );
    

                
    
 

};

export default Right;