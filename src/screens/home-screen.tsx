import React, { FC, useEffect } from 'react';
import { useGlobalContext } from "../context";
import CollapseItem from "../components/collapse-view";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {

    const { state, dispatch } = useGlobalContext();

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://petstore.swagger.io/v2/swagger.json')
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
              fetchData();
    }, []);


    function  urlify(text:string) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        console.log("split",text.split(urlRegex))
        return text.split(urlRegex)
          .map(part => {
            if (part.match(urlRegex)) {
              return <a href={part} key={part}> {part} </a>;
            }
            return part;
          });
      }
    
      const headingAvailable = (
        <span className="home_post_text">{urlify(state.swaggerData.info.description)}</span>
      );
      console.log("headingAvailable",headingAvailable)
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
                    <div>{headingAvailable}</div>
                    </div>
                    {state.swaggerData.tags.map((tag: any, index) => (
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