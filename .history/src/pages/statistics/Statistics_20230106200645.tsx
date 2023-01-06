import React from 'react'

const Statistics = () => {
  return (
    <div className="statistics">
        <div className="flex items-center justify-center w-full py-[100px]">
            <div>
                <div className="flex items-center pb-10 gap-x-10">
                    <span className="text-2xl text-black cursor-pointer font-dela">For the day</span>
                    <span className="text-2xl cursor-pointer text-greydark font-dela">For all the time</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics