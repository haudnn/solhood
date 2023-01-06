import React from 'react'
const Game = () => {
  return (
    <div className="game bg-greyligt">
        <div className="flex items-center justify-center wrapper-calc">
            <div className="">
                <div className='flex flex-col items-center'>
                    <div className='flex items-center'>
                        <p className='text-5xl font-dela'>x2</p>
                        <p className='text-lg font-semibold text-greydark'>multiplier</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-5xl font-dela'>30</p>
                        <p className='text-lg font-semibold text-greydark'>points</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game