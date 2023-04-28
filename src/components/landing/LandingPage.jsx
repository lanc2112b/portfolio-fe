import { useEffect, useState } from "react"; //, 
import { getContentItems } from "../../api/apiConsumer";
//import me from "../../assets/me.svg";


const LandingPage = () => {

    useEffect(() => {
        document.title = 'Home';
    });

    const [landingContent, setLandingContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        
        getContentItems()
            .then((results) => {
                
                setLandingContent([...results]);
                //console.log(results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setLoading]);

    if (loading)
        return (<><p> Loading... </p></>); 
   
    return (
        <>
            <section className="m-0 p-0 w-full h-full  hero_lone">
                <div className={`m-0 p-0 w-full h-full hero_ltwo`}>
                    <div className="m-0 p-0 w-full h-full shape_bg">
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full h-full bg-gray-50 bg-opacity-10 py-12 px-6">
                            <div className="col-span-1 md:col-span-1 flex flex-col justify-center items-center md:justify-between md:items-start  p-8 order-2 md:order-2">
                                <h2 className="text-[12vw] md:text-[9.65vw] 3xl:text-[9vw] leading-[10vh] xl:leading-[10vw] 3xl:leading-[8.5vw] my-1 font-medium">Full Stack</h2>
                                <h2 className="text-[10vw] md:text-[9.65vw] 3xl:text-[9vw] leading-[11vh] xl:leading-[10vw] 3xl:leading-[8.5vw] mb-2 font-medium">Web Developer</h2>
                            </div>
                            <div className="col-span-1 md:col-span-1 flex flex-col justify-start items-center p-2 md:p-8 md:ps-20 order-1 md:order-2">
                                <img src={landingContent[0]?.area_content_image} alt="me as svg" className="w-40 h-40 place-self-center md:mt-2 lg:mt-0 xl:mt-5" />
                                <h2 className="text-4xl my-4 font-medium">{landingContent[0]?.area_content_title}</h2>
                                <p>{landingContent[0]?.area_content}</p>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* <div className="flex items-center m-2 fixed bottom-40 right-0 border border-gray-400 rounded p-2 bg-gray-300 text-pink-600 text-sm">
                  <svg className="h-6 w-auto inline" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#paint0_linear)" fillRule="evenodd" clipRule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"></path>
                        <defs>
                            <linearGradient id="paint0_linear" x1="3.5" y1="16" x2="59" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2298BD"></stop>
                                <stop offset="1" stopColor="#0ED7B5"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                     Current breakpoint
                    <span className="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">default (&lt; 640px)</span>
                    <span className="ml-1 hidden sm:inline md:hidden font-extrabold">sm</span>
                    <span className="ml-1 hidden md:inline lg:hidden font-extrabold">md</span>
                    <span className="ml-1 hidden lg:inline xl:hidden font-extrabold">lg</span>
                    <span className="ml-1 hidden xl:inline 2xl:hidden font-extrabold">xl</span>
                    <span className="ml-1 hidden 2xl:inline 3xl:hidden font-extrabold">2xl</span>
                    <span className="ml-1 hidden 3xl:inline font-extrabold">3xl</span>
                </div> */}
            </section>

        </>
    )
}
export default LandingPage;