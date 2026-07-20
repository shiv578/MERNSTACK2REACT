import { useContext } from "react";
import { ThemeContext } from "./App"; // or import from ThemeContext.jsx if you created a separate file

function Home() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
 <button
    onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
                     }
>
  Toggle Button
        </button>
    );
}

export default Home;