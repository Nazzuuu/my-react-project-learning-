import LogoCatsu from './assets/doggandcatt.jpg'
function Header({ ClickmoHome}) {
  return (
    <>
      <header>

        <nav id="header-color">

          <img className="logo-image" src = {LogoCatsu} alt = "logo" id = "click-logo"
            onClick={(e) => {e.preventDefault(); ClickmoHome();}}>

          </img>
            
          <ul>
          
            <li><a href="#" id="home-click" onClick={(e) => {e.preventDefault();
               
               ClickmoHome();document.getElementById('card-section').scrollIntoView({behavior:"smooth"});}}>Home Page</a></li>

            <li><a href="#" id="about-click"onClick={(e) => {e.preventDefault();
               document.getElementById('about-section').scrollIntoView
               ({behavior:"smooth",block:"start"});}}>About</a></li>

            <li><a href="" id = "service-click"> Services</a></li>
            <li><a href="#">Contact</a></li>

          </ul>

        </nav>       
     </header>

 
   </>

  );
}

export default Header;