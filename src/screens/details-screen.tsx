import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import Table from "../components/table-view"
interface CustomizedState {
    pathId: string
}
interface TableContentType {
    description?: string,
    name?: string,
    required?: string,
    code?: string
}


const Details = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const pathState = location.state as CustomizedState;
    const { state } = useGlobalContext();
    const parameterHeader :string[] = ['Name', "Description", "Required"]
    const responseHeader :string[] = ['Code', 'Description']
    const formatPathData = () => {
        let parentObj = state.swaggerData.paths[pathState.pathId];
        return Object.keys(parentObj || {}).reduce((acc: any, cur: any) => {
            acc[cur] = { ...(acc[cur] || {}) };
            acc[cur]["parameters"] = parentObj[cur]["parameters"];
            acc[cur]["responses"] = parentObj[cur]["responses"];
            return acc;
        }, {});
    };
    const operations:string[] = Object.keys(formatPathData())
    const [parameterContent, setParamContent] = useState<any>([]);
    const [responseContent, setResponseContent] = useState<any>([]);
    const selectedPathDetails = formatPathData();
    const [operation, setCurrentOperations] = useState<string>(operations[0]);
 
   
    useEffect(() => {
        setSelectedOperationDetails(operation, selectedPathDetails)
    }, []);

    const setSelectedOperationDetails = (selectedOperation: string, formattedData: any) => {
        let selectedItem = formattedData[selectedOperation]
        let paramTableContent: TableContentType[] = []

        selectedItem.parameters.map((itemData: any) => {
            return paramTableContent.push({
                name: itemData.name,
                description: itemData.description,
                required: itemData.required ? 'true' : 'false'
            })
        })
        let responseTableContent = Object.keys(selectedItem.responses).reduce((res: any, el: any) => {
            if (typeof selectedItem.responses[el] === 'object' && selectedItem.responses[el] !== null) {
                return [...res, { code: el, description: (selectedItem.responses[el]).description }];
            }
            return res
        }, []);
        setParamContent(paramTableContent)
        setResponseContent(responseTableContent)
    }

    const renderOperationDetails = (e: React.MouseEvent<HTMLElement>, selectedOperation: string): void => {
        e.preventDefault();
        setCurrentOperations(selectedOperation)
        setSelectedOperationDetails(selectedOperation, selectedPathDetails)
    }
    return (
        <div className='flex flex-col  h-screen bg-gray-100'>
            <div className="bg-teal-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex ">
                                <div className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded inline-flex items-center" onClick={() => { navigate('/') }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back
                                </div>
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="hidden md:inline"> {pathState.pathId}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex py-3 px-3 sm:px-6 lg:px-8 flex-col'>
                <div className="flex flex-row items-center">
                    <div className='text-2xl text-pink-600 font-bold'> Operations </div>
                    <div className='flex ml-3  content-start flex-wrap flex-row'>
                        {operations.map((item, index) =>
                            <button key={index} className={`${item === operation ? 'bg-teal-500' : ''} w-1/3 flex-1 mr-4 hover:bg-teal-500 text-pink-500 font-bold py-2 px-4 border bg-white border-teal-500 rounded`} onClick={(e) => renderOperationDetails(e, item)}>
                                {item}
                            </button>
                        )}
                    </div>
                    
                </div>
                <div className='flex flex-col border rounded-lg border-gray-400 px-3 py-3 mx-2 my-2'>
                    <div className='text-xl text-pink-600 font-bold py-6'>
                        Parameters
                    </div>
                    <Table tableHeaders={parameterHeader} tableContents={parameterContent}></Table>
                    <div className='text-xl text-pink-600 font-bold py-6'>
                        Response
                    </div>
                    <Table tableHeaders={responseHeader} tableContents={responseContent}></Table>
                </div>
            </div>
        </div>
    );
};

export default Details;