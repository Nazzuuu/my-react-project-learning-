import { useState } from "react"
import CatCard from "./CatCard"
import Header from "./header"
import Footer from "./Footer"


function App() {
 
 const [isHome, setIsVisible] = useState(false);
 const handleToggle = () => setIsVisible(true);
 const [view,setView] = useState("home");


  
  return(
    <>
    <Header 
        ClickmoHome={(handleToggle) } 
        ClickmoAbout={() => setView("about")} 
      />

      {isHome && <CatCard />} 
      {isHome && <Footer/>}
   

    </>
  );
  
}

export default App
