import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light";
    });

    useEffect(()=>{
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }
    ,[theme]);
        
    const changeTheme =()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"));
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = ()=>{
    return useContext(ThemeContext);
}
