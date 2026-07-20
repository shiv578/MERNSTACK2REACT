import React, { useEffect } from 'react'

import { useContext ,createContext,useState} from 'react'

const ThemeContext = createContext();


function App() {

    // const{theme,setTheme} = useContext(ThemeContext);
const [theme,setTheme] = useState("light");

useEffect(()=>{
    document.body.style.backgroundColor =  theme === "light" ? "white" : 'black';
        document.body.style.color =  theme === "light" ? "black" : 'white';

        
})


  return (
    <div>


            <ThemeContext.Provider value={{ theme, setTheme }}>


<Home />

</ThemeContext.Provider>
      {/* wer are going to learn use context it is a 

      use context is a ract hook used to read data from contect without passing through many layer*/
      
      }



    </div>
  );
}

export default App;
