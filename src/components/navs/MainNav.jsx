import { Link } from "react-router-dom";

const MainNav = ({ sideBar }) => {

    return (
        <>
            <nav className={`nav ${sideBar ? 'block' : 'hidden'} sticky left-0 top-0 w-16 h-screen z-50 bg-stone-50 shad-hint`}>
                <ul className="px-2">
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center">
                        <img src="/Muninn_72.png" alt="" />
                    </li>
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center text-3xl">
                        <i className="fa-solid fa-house-chimney"></i>
                    </li>
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center text-3xl">
                        <Link to="/portfolio">
                            <i className="fa-solid fa-briefcase"></i>
                        </Link>
                    </li>
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center text-3xl">
                        <i className="fa-solid fa-message"></i>
                    </li>
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center text-3xl">
                        <i className="fa-brands fa-github"></i>
                    </li>
                    <li className="h-16 border-b border-stone-200 flex justify-center items-center text-3xl">
                        <i className="fa-brands fa-linkedin"></i>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNav;