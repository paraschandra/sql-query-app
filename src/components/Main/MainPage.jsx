import React, { useState } from 'react'

import { Columns } from "./Sidebar/Columns";
import { Overview } from "./Outputs/Overview";

import {Queries} from "./Sidebar/Queries/Queries";
import {InputForm} from "./Input/InputForm";
import {Output} from "./Outputs/Output";

import {queries} from "../../data";

export const MainPage = ({toggle, setToggle}) => {
    const [queryData, setQueryData] = useState(queries);
    const [currentQuery, setCurrentQuery] = useState(null);
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
            {(page === "Query") ?
            (
            <div className="flex flex-row h-full relative w-full mt-1">
                <Queries queries = {queryData} setCurrentQuery = {setCurrentQuery} toggle = {toggle} setToggle = {setToggle}/>
                <div className={`flex flex-col h-full ${(toggle === "open")?("w-0"):("w-full")}`}>
                    <div className="flex flex-row justify-start h-14 w-full border-b-2">
                    <div className="flex h-full w-36 px-4 py-2 mx-1 justify-center items-center border-x-2 border-t-2 rounded-t-lg
                    cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayOverview}>
                        Overview
                    </div>
                    <div className="flex h-full w-36 px-4 py-2 mr-1 justify-center items-center border-x-2 border-t-2 rounded-t-lg
                    cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayQuery}>
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
                    <h2 className='text-xl font-semibold my-4 mx-12 max-md:mx-2'>
                        Output:
                    </h2>
                    <Output result = {result}/>
                </div>
            </div>
            )
            :
            (
            <div className="flex flex-row h-full relative w-full mt-1">
                <Columns toggle  = {toggle}/>
                <div className={`flex flex-col h-full ${(toggle === "open")?("w-0"):("w-full")}`}>
                <div className="flex flex-row justify-start h-14 w-full border-b-2">
                    <div className="flex h-full w-36 px-4 py-2 mx-1 justify-center items-center border-x-2 border-t-2 rounded-t-lg
                    cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayOverview}>
                    Overview
                    </div>
                    <div className="flex h-full w-36 px-4 py-2 mr-1 justify-center items-center border-x-2 border-t-2 rounded-t-lg
                    cursor-pointer hover:scale-105 font-semibold text-blue-600" onClick={displayQuery}>
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