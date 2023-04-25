import { useEffect, useState } from "react";
import PortfolioCard from "../uiparts/PortfolioCard";
import { getPortfolioList } from "../../api/apiConsumer";

const PortfolioList = () => {

    useEffect(() => {

        document.title='Portfolio';
    },[]);


    const [portfolioList, setPortfolioList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getPortfolioList()
            .then((results) => {
                setPortfolioList(results);
                setLoading(false);
            })
            .catch((error) => {
                //TODO: Add error handling
                console.log(error);
            });
    },[]);

    if (loading)
        return (<><p> Loading... </p></>);

    return (
        <>
            <section className="container gap-4 columns-1 
                                md:columns-2 lg:columns-3 
                                py-10 mx-auto h-full
                                px-3 shad-hint">
                
                
                {portfolioList.map((listItem) => {
                    return (<PortfolioCard key={listItem.id} listItem={listItem} />);
                })}
                
                
                
            </section>
        </>
    );
}

export default PortfolioList;