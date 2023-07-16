import React from 'react'
import { Result } from './Result'

export const Output = ({result}) => {
  return (
    <div className='flex flex-col justify-start w-full px-12 py-4 max-md:px-2 overflow-auto'>
      {result?(
        <div><Result result = {result}/></div>
      ):(
        <>
          <p>Choose a query from sidebar and click run. <br></br>
            Or write a given query to execute it.
          </p>  
        </>
      )}
    </div>
  );
}
