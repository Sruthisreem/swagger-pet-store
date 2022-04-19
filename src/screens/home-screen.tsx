import React, { FC, useEffect } from 'react';
import { useGlobalContext } from "../context/context";
import CollapseItem from "../components/collapse-view";
import ReactMarkdown from 'react-markdown'
import {Tag} from '../interface/interfaces'
interface HomeProps {

}

const Home: FC<HomeProps> = () => {

    const { state, dispatch } = useGlobalContext();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () =>{
        fetch('https://petstore.swagger.io/v2/swagger.json')
            .then((response) =>{
                if (response.ok) {
                    return response.json();
                  }
            })
            .then(data => dispatch({
                type: "DATA_FETCH_SUCCESS",
                payload: data,
            }))
            .catch((error:any) => {
                dispatch({
                    type: "DATA_FETCH-ERROR",
                    payload: "Failed to get data. Please try again !!!",
                })
              });
    }
   
    return (
        <>
            <div className="flex flex-col h-screen bg-slate-300 overflow-scroll">
            {state.isLoading && <div className='w-full h-full flex items-center justify-center'> Loading....</div> }
                {state.errorMessage ? <div className='w-full h-full flex items-center justify-center'>{state.errorMessage}</div> : <>
                <div className="bg-teal-600"><div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-2xl text-pink-600 font-bold">{state.swaggerData.info.title}</div>
                </div>
                </div>
                <div className='py-3 px-4'>
                    <div>
                    <div className='py-4'>                    <ReactMarkdown children={state.swaggerData.info.description} />
</div>
                    </div>
                    {state.swaggerData.tags.map((tag: Tag, index) => (
                        <div key={index}>
                            <CollapseItem tag={tag} paths={state.swaggerData.paths}></CollapseItem>
                        </div>
                    ))}
                </div>
                </>
}
            </div>
        </>
    );
};

export default Home;