import { useNavigate } from "react-router-dom";

const FourOhFour = () => {

    const navigate = useNavigate();

    const clickHandler = () => {

        navigate("/");

    }

    return (
        <>
            <section className="fourohfour h-full">
                <div className="p-4 flex flex-col justify-between h-full items-center bg-bottom bg-no-repeat bg-cover bg-[url('/lost_fourohfour.jpg')]">
                    <div className="h-1/3 w-full md:w-1/2 mt-20 p-8 rounded-sm shadow-lg flex flex-col justify-center items-center text-center bg-stone-300 bg-opacity-30 " >
                        <h2 className="text-3xl font-semibold text-stone-600 mb-4">Oh No, Four Oh Four</h2>
                        <p className="mb-8">Seems we couldn't find that page, check the address or head on back :)</p>
                        <button className="py-1 px-3 font-semibold text-stone-50 rounded-full bg-stone-400" onClick={clickHandler}><i className="me-3 fa-solid fa-caret-left"></i>Back To Safety</button>
                    </div>
                    <div className="w-full text-left text-stone-50 text-sm self-end">Attribution: Photo by <a href="https://unsplash.com/@andrewtneel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Neel</a> on <a href="https://unsplash.com/photos/aebPbwAWjDs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
                </div>
            </section>
        </>
    )
}

export default FourOhFour;