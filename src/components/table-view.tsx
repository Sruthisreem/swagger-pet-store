import React, { FC } from 'react';

interface TableProps {
    tableHeaders: string[];
    tableContents: Array<any>;
}

const Table: FC<TableProps> = ({ tableHeaders, tableContents }) => {
    return (
        <>
            <table className="w-full border-collapse border border-slate-400 ...">
                <thead className="bg-gray-50">
                    <tr>
                        {tableHeaders.map((item, index) =>
                            <th className="border border-slate-300 ...">{item}</th>
                        )}
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-300'>
                    {tableContents.map((item, index) => {
                        return <tr>{
                         Object.keys(item).map((key) =>{
                            return <td className="px-3 border border-slate-300 ...">{item[key]}</td>})
                        }
                        </tr>
                    })}

                </tbody>
            </table>
        </>
    );
};

export default Table;