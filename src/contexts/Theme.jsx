import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const initial = 'light';

    const [theme, setTheme] = useState(initial);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};