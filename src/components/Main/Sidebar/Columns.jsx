import React from 'react'
import { data } from '../../../data';

export const Columns = () => {
  
  const columns = Object.keys(data[0].result[0]);
  console.log(data[0].result);
  
  return (
    <div className="flex flex-col w-1/4 overflow-auto px-0 h-full top-0 border-r border-gray-200 max-md:hidden">
        <div className='w-full p-4 h-18'>
            <h2 className='text-xl font-semibold'>
                Columns <span>({columns.length}):</span>
            </h2>
        </div>
        <div className="flex flex-col border-y h-full w-full">
            {columns.map((col, index) => {
                return(
                    <div className="flex justify-start items-center border-b-2 w-full h-18 p-4 cursor-pointer hover:scale-105 hover:shadow-lg"
                    key={index}
                    >
                        <div className="flex gap-2 items-center px-2">
                            <p className="text-base leading-4 font-medium">
                                {col}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}
