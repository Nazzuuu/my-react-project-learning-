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
          
            <li><a href="#" id="home-click" onClick={(e) => {e.preventDefault(); ClickmoHome();}}>Home Page</a></li>
            <li><a href="#" id="about-click">About</a></li>
            <li><a href="#" id = "service-click"> Services</a></li>
            <li><a href="#">Contact</a></li>

          </ul>

        </nav>       
     </header>

     {/* <div className="header-about">
         <nav>
          <p><span id = "text-abouts">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rerum consectetur similique ab eligendi ipsa cupiditate illum? Vel veritatis ipsum praesentium incidunt expedita dolorem voluptates repellat, excepturi, adipisci recusandae qui.</span></p>
        </nav>
      </div>    */}
      
   </>

  );
}

export default Header;