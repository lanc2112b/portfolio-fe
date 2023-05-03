import { Link } from "react-router-dom";

const MainNav = ({ sideBar }) => {

    return (
        <>
            <nav className={`nav ${sideBar ? 'block' : 'hidden'} sticky left-0 top-0 w-24 md:w-auto h-screen z-50 bg-stone-50 shad-hint`}>
                <ul className="px-2">
                    <li className="h-16 border-b border-stone-200 flex justify-center md:justify-start items-center">
                        <img src="/Muninn_72.png" alt="Huginn & Muninn Logo" className="w-12 h-12"/>
                    </li>
                    <li className="h-16 mt-1 md:mt-0 border-b border-stone-200 flex justify-center md:justify-start items-center text-3xl">
                        <Link to="/" title="Home" className=" flex flex-col md:flex-row justify-center items-center ">
                            <i className="fa-solid fa-house-chimney"></i><span className="ms-0 md:ms-2 text-base">{'  '}Home  </span>
                        </Link>
                    </li>
                    <li className="h-16 mt-1 md:mt-0 border-b border-stone-200 flex justify-center md:justify-start items-center text-3xl">
                        <Link to="/projects" className=" flex flex-col md:flex-row justify-center items-center ">
                            <i className="fa-solid fa-briefcase"></i><span className="ms-0 md:ms-2  text-base">Projects</span>
                        </Link>
                    </li>
                    <li className="h-16 mt-1 md:mt-0 border-b border-stone-200 flex justify-center md:justify-start items-center text-3xl">
                        <Link to="/contact" className=" flex flex-col md:flex-row justify-center items-center ">
                            <i className="fa-solid fa-message"></i><span className="ms-0 md:ms-2  text-base">Contact</span>
                        </Link>
                    </li>
                    <li className="h-16 mt-1 md:mt-0 border-b border-stone-200 flex justify-center md:justify-start items-center text-3xl">
                        <Link to="https://github.com/lanc2112b" target="_blank" className=" flex flex-col md:flex-row justify-center items-center ">
                            <i className="fa-brands fa-github"></i><span className="ms-0 md:ms-2  text-base">GitHub</span>
                        </Link>
                    </li>
                    <li className="h-16 mt-1 md:mt-0 border-b border-stone-200 flex justify-center md:justify-start items-center text-3xl">
                        <Link to="https://www.linkedin.com/in/tony-lancaster-3a055a150" target="_blank" className=" flex flex-col md:flex-row justify-center items-center ">
                            <i className="fa-brands fa-linkedin"></i><span className="ms-0 md:ms-2 text-base">LinkedIn</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNav;