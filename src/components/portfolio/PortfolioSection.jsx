import { useEffect } from "react";
import PortfolioCard from "../uiparts/PortfolioCard";

const PortfolioSection = () => {

    useEffect(() => {

        document.title='Portfolio';
    });

    return (
        <>
            <section className="container gap-4 columns-1 
                                md:columns-2 lg:columns-3 
                                py-10 mx-auto h-full
                                px-3 shad-hint">
                
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                
            </section>
        </>
    );
}

export default PortfolioSection;