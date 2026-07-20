import React from 'react'

import { useContext ,createContext,useState} from 'react'

const ThemeContext = createContext();

function useContext() {

    // const{theme,setTheme} = useContext(ThemeContext);

  return (
    <div>

const [theme,setTheme] = useState("light");

<ThemeContext.Provider value = {(theme,setTheme)}>
<Home />

</ThemeContext.Provider>
      {/* wer are going to learn use context it is a 

      use context is a ract hook used to read data from contect without passing through many layer*/
      
      }



    </div>
  );
}

export default useContext
