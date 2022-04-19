import React, { FC } from 'react';
import { TableContentType } from "../interface/interfaces"

interface TableProps {
    tableHeaders: string[];
    tableContents: TableContentType[];
}

const Table: FC<TableProps> = ({ tableHeaders, tableContents }) => {
    return (
        <>
            <table className="w-full border-collapse border border-slate-400 ...">
                <thead className="bg-gray-400">
                    <tr>
                        {tableHeaders.map((item, index) =>
                            <th key={index} className="border border-slate-300 ...">{item}</th>
                        )}
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-300'>
                    {tableContents.map((item, index) => {
                        return <tr key={index}>{
                         Object.keys(item).map((key:string, itemIndex) =>{
                            return <td key={itemIndex} className="px-3 border border-slate-300 ...">{item[key as keyof TableContentType]}</td>})
                        }
                        </tr>
                    })}

                </tbody>
            </table>
        </>
    );
};

export default Table;