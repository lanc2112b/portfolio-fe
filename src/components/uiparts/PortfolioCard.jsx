import React from 'react';
import { useNavigate } from 'react-router-dom';

function randomCharLength() {
    
    let range = { min: 500, max: 750 }
    let delta = range.max - range.min

    return Math.round(range.min + Math.random() * delta)
}

const PortfolioCard = ({ listItem }) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/projects/${listItem.id}`);
    }
    return (
        <>
            <div className="break-inside-avoid-column mb-6 col-span-1 h-fit m-0 p-6 duration-300 shadow-sm rounded-md hover:bg-stone-50

                          hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-between">
                <h2 className="text-xl bg-stone-200 py-1 px-3 rounded-t-md text-right">{listItem.title}</h2>
                <hr className="border-stone-300 my-0.5" />
                <div className="flex flex-1 py-2 pt-0">
                    <img className="w-full" src={listItem.image_url} alt="something" />
                </div>
                <div className="p-1 bg-opacity-20 bg-stone-50">
                    <p>
                        {`${listItem.description.slice(0, randomCharLength())}...`}
                    </p>
                </div>
                <hr className="border-stone-300 my-3" />
                <div className="flex justify-end w-full">
                    <button className="bg-stone-400 py-1 px-3 rounded-full font-semibold text-stone-50 hover:bg-stone-300" onClick={clickHandler}>
                        Read More...
                    </button>
                </div>
            </div>
        </>
    );
}

export default PortfolioCard;