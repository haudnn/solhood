import React from 'react';
import sprint from '../assets/imgs/sprint.png';
const Sprint = () => {
  return (
    <div>
        <div className="sprint bg-greyligt">
            <div className="flex items-center justify-center w-full h-full">
                <div className="p-10 bg-white rounded-xl">
                    <div className="grid">
                        <div className="row">
                            <div className="col l-4">
                                <div>
                                    <img src={sprint} alt="" className='object-cover w-full h-full'/>
                                </div>
                            </div>
                            <div className="col l-8">
                                <div>
                                    <div className='flex'>
                                        <p className="text-5xl font-dela">Sprint</p>
                                        <div className='p-3 bg-cyanlight'>
                                            <span className='text-sm font-semibold text-cyandark'>speed task</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
  )
}

export default Sprint