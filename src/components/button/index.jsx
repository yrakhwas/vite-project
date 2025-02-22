import { useTheme } from "../../contexts/themeContext";

export const ChangeThemeButton=()=>{
    const {theme, changeTheme} = useTheme();
    
    return(
        <button onClick={changeTheme}
        style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#333" : "#fff",
            border: "1px solid #aaa",
            borderRadius: "5px"
        }}
        >
            {theme === "light"? "Dark mode":"Light mode"}
        </button>
    );
};