import { useEffect } from "react";

const LandingPage = () => {

    useEffect(() => {
        document.title = 'Home';
    });

    return (
        <>
            <section className="container
                                py-10 mx-auto h-full
                                px-6 shad-hint">
                <p>Something</p>
                <p>Something</p>
                <p>Something</p>
                <p>Something</p>
                <p>Something</p>
                
            </section>

        </>
    )
}
export default LandingPage