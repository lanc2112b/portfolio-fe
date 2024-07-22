import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { Toaster } from 'react-hot-toast';

const Header = ({ sideBar, setSideBar }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    const navHandler = () => {

        setSideBar(!sideBar);
    }

    const toggleTheme = () => {

        setTheme(!theme);

    }

    console.log(theme);

    return (
        <>
            <header className="h-7 px-3 w-full sticky top-0 border-1 z-50 bg-stone-50 shadow-sm flex flex-row justify-between items-center">
                <div>
                    <button type="button" onClick={navHandler}><i className="fa-solid fa-bars me-3"></i></button>
                    Show / Hide Nav
                </div>
                {/* <ToggleLightDarkButton theme={theme} toggleTheme={toggleTheme} /> */}
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

const ToggleLightDarkButton = ({ theme, toggleTheme }) => {

    return (
        <>
            <div>
                Light / Dark
                <LightButton theme={theme} toggleTheme={toggleTheme} />
                <DarkButton theme={theme} toggleTheme={toggleTheme} />
            </div>  
        </>
    )
}

const DarkButton = ({ theme, toggleTheme }) => { 

    if (theme) return null;

    return (
        <>
            <button type="button" onClick={toggleTheme}>
                <i className="fa-regular fa-lightbulb ms-3 "></i>
            </button>
        </>
    )
}

const LightButton = ({ theme, toggleTheme }) => {
    
    if (!theme) return null;

    return (
        <>
            <button type="button" onClick={toggleTheme}>
                <i className="fa-solid fa-lightbulb ms-3 "></i>
            </button>
        </>
    )
}