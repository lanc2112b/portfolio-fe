import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DateTime } from 'luxon';
import { getPortfolioItem } from "../../api/apiConsumer";

const PortfolioItem = () => {
    
    const { id } = useParams();
    
    useEffect(() => {

        document.title = `Project ${id}`;
    }, [id]);

    

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getPortfolioItem(id)
            .then((result) => {
                setItem(result);
                //console.log(result);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    if (loading)
        return (<><p>Loading...</p></>);

    return (
        <>
            <section className="container py-10 mx-auto h-full px-3 shad-hint">
                <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2 px-2 sm:px-4">
                    <div className="col-span-1 sm:col-span-2 w-full bg-stone-200 rounded-t-md py-1 px-3 text-xl">
                        <h2>{item.title}</h2>
                    </div>
                    <hr className="border-stone-300 my-0.5 col-span-1 sm:col-span-2" />
                    <div className="col-span-1">
                        <img src={item.image_url} alt="" className="" />{ }
                    </div>

                    <div className="col-span-1 bg-stone-200 bg-opacity-100 p-4 mt-3 sm:mt-0">
                        <h3>Info</h3>
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="font-medium leading-6 text-gray-900">Hosted:</dt>
                                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <Link to={item.hosted_url} target="_blank" >
                                        {item.hosted_url}
                                    </Link>
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="font-medium leading-6 text-gray-900">GitHub:</dt>
                                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <Link to={item.github_url} target="_blank" >
                                        {item.github_url}
                                    </Link>
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="font-medium leading-6 text-gray-900">Video:</dt>
                                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {item.video_url ?
                                        <Link to={item.video_url} target="_blank" >
                                            {item.video_url}
                                        </Link>
                                        :
                                     'Not Applicable'}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="font-medium leading-6 text-gray-900">Added</dt>
                                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{DateTime.fromSQL(item.created_at).toLocaleString(DateTime.DATETIME_FULL)}</dd>
                            </div>
                            
                        </dl>
                        
                    </div>
                    <div className="col-span-1 sm:col-span-2 mt-3">
                        <p>{item.description}</p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default PortfolioItem;