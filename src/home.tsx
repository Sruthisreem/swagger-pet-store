import React, { FC, useEffect } from 'react';
import { useGlobalContext } from "./context";
// import { SwaggerData } from "./interface"
import CollapseListItem from "./components/collapse-view";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {

    const { state, dispatch } = useGlobalContext();

    useEffect(() => {
        fetch("https://petstore.swagger.io/v2/swagger.json")
            .then(response => response.json())
            .then(data => dispatch({
                type: "UPDATE_DATA",
                payload: data,
            }));
    }, []);
    return (
        <>
            <div className="flex flex-col px-3 py-3 h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800 overflow-scroll">
                <div className="">{state.swaggerData.info.title}</div>
                <div>This is a sample server Petstore server. </div>
                <div className='py-2'>
                {state.swaggerData.tags.map((tag: any) => (
                    <CollapseListItem tag={tag} paths={state.swaggerData.paths}></CollapseListItem>
                ))}
                </div>       
            </div>
        </>
    );
};

export default Home;