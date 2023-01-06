import React from 'react'
import level from "../assets/imgs/level.png";
const Game = () => {
  return (
    <div className="game bg-greyligt">
        <div className="flex items-center justify-center wrapper-calc">
            <div className="">
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex flex-col items-center'>
                        <p className='text-5xl font-dela'>x2</p>
                        <p className='text-lg font-semibold text-greydark'>multiplier</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-5xl font-dela'>30</p>
                        <p className='text-lg font-semibold text-greydark'>points</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center gap-x-[10px] mb-[10px]'>
                        <div>
                            <img src={level} alt="" className="object-cover w-full h-full"/>
                        </div>
                        <div>
                            <img src={level} alt="" className="object-cover w-full h-full"/>
                        </div>
                        <div>
                            <img src={level} alt="" className="object-cover w-full h-full"/>
                        </div>
                    </div>
                    <div>
                        <p className='text-5xl font-dela'>negative</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game