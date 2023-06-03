import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { Toaster } from 'react-hot-toast';

const Header = ({ sideBar, setSideBar }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    const navHandler = () => {

        setSideBar(!sideBar);
    }

    const toggleTheme = () => {

        setTheme(prev => { return !prev });

    }

    return (
        <>
            <header className="h-7 px-3 w-full sticky top-0 border-1 z-50 bg-stone-50 shadow-sm flex flex-row justify-between items-center">
                <div>
                    <button type="button" onClick={navHandler}><i className="fa-solid fa-bars me-3"></i></button>
                    Show / Hide Nav
                </div>

                <div>
                    Light / Dark
                    {theme ?
                        <button type="button" onClick={toggleTheme}>
                        <i className="fa-regular fa-lightbulb ms-3 "></i>
                    </button>
                    :
                        <button type="button" onClick={toggleTheme}>
                        <i className="fa-solid fa-lightbulb ms-3 "></i>
                    </button>
                    }    
                </div>    
                    {/* <i className="fa-solid fa-toggle-on"></i>
                    <i className="fa-solid fa-toggle-off"></i> */}
  
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