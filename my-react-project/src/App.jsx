import { useState } from "react"
import Cardss from "./Cardss"
import Header from "./header"
import Footer from "./Footer"


function App() {
 
 const [isHome, setIsVisible] = useState(false);
 const handleToggle = () => setIsVisible(true);



  
  return(
    <>
    <Header 
        ClickmoHome={(handleToggle) } 
        ClickmoAbout={() => setView("about")} 
      />

      {isHome && <Cardss />} 
      {isHome && <Footer/>}
   
      
    </>
  );
  
}

export default App
