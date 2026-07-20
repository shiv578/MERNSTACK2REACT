import React from 'react'

import { useContext ,createContext} from 'react'

const ThemeContext = createContext();

const useContext = () => {

    const{theme,setTheme} = useContext(ThemeContext);

  return (
    <div>
      {/* wer are going to learn use context it is a 

      use context is a ract hook used to read data from contect without passing through many layer*/
      
      }
    </div>
  )
}

export default useContext
