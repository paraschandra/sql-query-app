import React, { useState } from 'react'
import { Columns } from "./Sidebar/Columns";
import {Queries} from "./Sidebar/Queries/Queries";
import {InputForm} from "./Input/InputForm";
import {Output} from "../Output/Output";
import { Overview } from "../Output/Overview";

import {queries} from "../../data";

export const MainPage = () => {
    const [queryData, setQueryData] = useState(queries);
    const [currentQuery, setCurrentQuery] = useState("Enter or select query to run...");
    const [result, setResult] = useState();
    const [page, setPage] = useState("Overview");

    const displayOverview = () => {
        setPage("Overview");
    }
    
    const displayQuery = () => {
    setPage("Query");
    }

    return (
        <>
            {(page === "Query")?
            (
            <div className="flex flex-row h-full relative w-full mt-1">
                <Queries queries = {queryData} setCurrentQuery = {setCurrentQuery}/>
                <div className="flex flex-col h-full w-full ">
                    <div className="flex flex-row justify-start h-14 w-full border-b-2">
                    <div className="flex h-full w-36 px-4 py-2 mx-2 justify-center items-center border-x-2 cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayOverview}>
                        Overview
                    </div>
                    <div className="flex h-full w-36 px-4 py-2 mx-2 justify-center items-center border-x-2 cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayQuery}>
                        Query
                    </div>
                    </div>
                    <InputForm 
                        queryData = {queryData}
                        setQueryData= {setQueryData}
                        currentQuery = {currentQuery}
                        setCurrentQuery = {setCurrentQuery}
                        setResult = {setResult}
                    />
                    <h2 className='text-xl font-semibold my-4 mx-12 max-md:mx-2 max-md:mb-1'>
                        Output:
                    </h2>
                    <Output result = {result}/>
                </div>
            </div>
            )
            :
            (
            <div className="flex flex-row h-full relative w-full mt-1">
                <Columns/>
                <div className="flex flex-col h-full w-full">
                <div className="flex flex-row justify-start h-14 w-full border-b-2">
                    <div className="flex h-full w-36 px-4 py-2 mx-2 justify-center items-center border-x-2 cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayOverview}>
                    Overview
                    </div>
                    <div className="flex h-full w-36 px-4 py-2 mx-2 justify-center items-center border-x-2 cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayQuery}>
                    Query
                    </div>
                </div>

                <h2 className='text-xl font-semibold my-4 mx-12 max-md:mx-2 max-md:mb-1'>
                    Table: Orders
                </h2>
                <Overview/>
                </div>
            </div>
            )}
        </>
    )
}