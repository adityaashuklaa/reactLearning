import { createContext, useContext } from "react";

export default ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// You can also pass variable and methods inside Context.