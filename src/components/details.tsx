import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

interface CustomizedState {
    pathId: string
}


const Details = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const pathState = location.state as CustomizedState;
    const { state} = useGlobalContext();
    var recordsSorted = []
    // const filteredData = Object.entries(state.swaggerData.paths).filter(([key, value]) => {
    //   if (key === pathState.pathId){ return  value}
        
    //     })

        const res = Object.entries(state.swaggerData.paths).filter(item=>{
            return item[0] === pathState.pathId
        })
        const filteredDaa = res.map(e => [Object.entries(e[1]).reduce((acc, [key, val]) => {
           
                if (e[0] === pathState.pathId) acc = {[key]: val}

                return acc

              }, {})]
            )
            console.log("filteredDaa->reduce", filteredDaa)
    
    return (
        <div>
            <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex ">
                                <div  className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded inline-flex items-center"  onClick={() => { navigate('/') }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Button
                                </div>
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="hidden md:inline"> {pathState.pathId}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py2'> Methods : </div>
            <div>keyy</div>
            {Object.entries(filteredDaa).map(([key, value]) => {
                
                <div className=''>{key}</div>
            })}
        </div>
    );
};

export default Details;