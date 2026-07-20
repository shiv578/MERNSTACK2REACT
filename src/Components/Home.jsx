import { useContext } from "react";

function Home(){
    const {theme,setTheme} = useContext(ThemeContext);
    return(
<button onClick ={()=>(theme === 'loght' ? "dark" : "light")}>Toggle Button</button>  
  )
}

export default Home;