


import React, { FC } from 'react';
import { Tag, Path } from "../interface"
import { useNavigate } from "react-router-dom";
interface CollapseListItemProps {
    tag: Tag;
    paths: Path;
}

const CollapseItem: FC<CollapseListItemProps> = ({ tag, paths }) => {
    const navigate = useNavigate()
    return (
        <>
            <details className="group mb-4 rounded bg-white shadow">
                <summary className="relative flex cursor-pointer list-none flex-wrap items-center rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none">
                    <h3 className="flex flex-1 p-4 font-semibold">{tag.name}</h3>
                    <div className="flex w-10 items-center justify-center">
                        <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90"></div>
                    </div>
                </summary>
                <div className="p-4">

                    {Object.entries(paths).map(([key, value]) => {
                        const tagfrom = key.split('/')[1];
                        return ((tagfrom === tag.name) ? <div className="flex py-2" key={key}>
                            <div className="flex w-full flex-row  items-center justify-between rounded-lg bg-white p-6 shadow-lg">
                                <h5 className="text-xl font-medium leading-tight text-gray-900">{key}</h5>
                                <button type="button" className="rounded bg-teal-600 px-2 py-2 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-lg"
                                    onClick={() => {
                                        const param = key.replace("{","").replace("}","") 
                                        navigate(`/details${param}`, {
                                        state: { pathId: key },
                                      }); }}>View Details</button>
                            </div>
                        </div> : undefined)
                    })
                    }
                </div>
            </details>
        </>
    );
};

export default CollapseItem;