import { useState } from "react";

function Count(){

   
    const[count,setcount] = useState("0");
 
    return(

<>
<button onClick={() => setcount((count))}></button>


</>
    );
}