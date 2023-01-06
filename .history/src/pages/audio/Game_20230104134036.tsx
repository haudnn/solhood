import React from 'react'
import playIcon from '../../assets/imgs/play-icon.png'
import {AiFillHeart} from 'react-icons/ai'
const Game = () => {
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center wrapper-calc">
          <div className='flex flex-col items-center justify-center'>
            <div className='mb-5 flex flex-col items-center justify-center w-[148px] h-[148px] rounded-[50%] border-4 border-solid border-cyandark cursor-pointer'>
              <img src={playIcon} alt=""  className='object-cover'/>
              <span className='text-lg font-bold text-cyandark'>Play</span>
            </div>
            <div className='flex gap-x-[10px]'>
              <AiFillHeart className='w-8 h-8 text-pinklight'/>
              <AiFillHeart className='w-8 h-8 text-pinklight'/>
              <AiFillHeart className='w-8 h-8 text-pinklight'/>
              <AiFillHeart className='w-8 h-8 text-pinklight'/>
              <AiFillHeart className='w-8 h-8 text-pinklight'/>
            </div>
            <div className='flex my-10 gap-x-5'>
              <div className='cursor-pointer p-[14px] rounded-full border-2 border-solid border-greyicon flex items-center justify-center'>
                <span className='text-lg font-bold text-greyicon'>prêt hypothécaire</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Game