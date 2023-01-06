import React from 'react'
import books from '../assets/imgs/books.svg'
const Result = () => {
  return (
    <div className="result bg-greyligt">
        <div className="flex items-center justify-center wrapper-calc">
            <div className="grid">
                <div className="row">
                    <div className="col l-6">
                        <div className='p-10 bg-white rounded-lg shadow-lg'>
                            <div className='grid'>
                                <div className="row">
                                    <div className="col l-6">
                                        <div>
                                            <img src={books} alt="" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="col l-6">
                                        <div>
                                            <p className='text-3xl font-dela'>Your Sprint</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className='p-10 bg-white rounded-lg shadow-lg'>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result