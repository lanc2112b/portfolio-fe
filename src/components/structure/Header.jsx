import { Toaster } from 'react-hot-toast';

const Header = ({ sideBar, setSideBar }) => {

    const navHandler = () => {

        setSideBar(!sideBar);
    }

    return (
        <>
            <header className="h-7 px-3 w-full sticky top-0 border-1 z-50 bg-stone-50 shadow-sm flex flex-row justify-between items-center">
                <button type="button" onClick={navHandler}><i className="fa-solid fa-bars"></i></button>
                
                <div>
                    <i className="fa-regular fa-lightbulb"></i>
                    <i className="fa-solid fa-lightbulb"></i>
                    <i className="fa-solid fa-toggle-on"></i>
                    <i className="fa-solid fa-toggle-off"></i>
                </div>
            </header>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    duration: 8000,
                }}
            />
        </>
    );
}

export default Header;