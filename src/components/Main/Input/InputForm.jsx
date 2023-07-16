import React, { useEffect, useRef } from 'react'
import { data } from '../../../data';

export const InputForm = ({ queryData, setQueryData, currentQuery, setCurrentQuery, setResult }) => {

  const inputRef = useRef();

  useEffect (() => {
    inputRef.current.value = currentQuery;
  }, [currentQuery]);

  const handleQuery = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    setCurrentQuery(input);
    let queriesData = data.filter((element) => element.query === currentQuery);
    let queries = [currentQuery, ...queryData];
    queries = [...new Set(queries)];
    
    if (queriesData.length) {
      queriesData = queriesData[0].result;
      setQueryData(queries);
      setResult(queriesData);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-60 w-full md:px-12 px-2 border-b border-gray-200'>
        <div className='flex justify-start w-full h-8'>
            <h2 className='text-xl font-semibold'>
              Execute Query:
            </h2>
        </div>

        <div className='flex flex-row h-40 md:h-16 w-full my-6'>
            <form className='flex flex-col md:flex-row justify-between h-40 md:h-16 w-full'>
                <input ref={inputRef} type='text' placeholder='Enter or select a query to run...'
                className='w-full h-20 md:h-16 px-3 border-2 border-gray-600 text-lg font-medium'/>

                <button className='h-16 md:h-18 w-2/5 md:w-1/6 md:ml-4 border-2 border-gray-600 bg-green-600 text-white text-xl font-semibold'
                onClick={handleQuery}>
                  Run
                </button>
            </form>
        </div>
    </div>
  )
}
